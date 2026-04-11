#!/usr/bin/env node

/**
 * Build script: generates Pokédex data from PokeAPI for the docs site.
 *
 * This creates a local JSON file containing all known species and enough
 * information to render the Pokedex without depending on game extraction.
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, '..');
const OUTPUT_DIR = join(DOCS_DIR, 'public', 'data');
const OUTPUT_FILE = join(OUTPUT_DIR, 'pokedex.json');
const POKEAPI_SPECIES = 'https://pokeapi.co/api/v2/pokemon-species';
const POKEAPI_POKEMON = 'https://pokeapi.co/api/v2/pokemon';
const POKEAPI_LIMIT = 10000;
const CONCURRENCY = 10;

const NAME_OVERRIDES = {
  'farfetchd': "Farfetch'd",
  'mr-mime': 'Mr. Mime',
  'mime-jr': 'Mime Jr.',
  'type-null': 'Type: Null',
  'jangmo-o': 'Jangmo-o',
  'hakamo-o': 'Hakamo-o',
  'kommo-o': 'Kommo-o',
  'tapu-koko': 'Tapu Koko',
  'tapu-lele': 'Tapu Lele',
  'tapu-bulu': 'Tapu Bulu',
  'tapu-fini': 'Tapu Fini',
  'porygon-z': 'Porygon-Z',
  'ho-oh': 'Ho-Oh',
  'porygon2': 'Porygon2',
  'nidoran-f': 'Nidoran F',
  'nidoran-m': 'Nidoran M',
  'type-null': 'Type: Null',
  'mr-rime': 'Mr. Rime',
};

function titleCase(value) {
  return value
    .split(/[-\s]/g)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function normalizeName(raw) {
  if (NAME_OVERRIDES[raw]) return NAME_OVERRIDES[raw];
  return raw
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ')
    .replace(/\bIii\b/, 'III')
    .replace(/\bIi\b/, 'II');
}

function typeName(raw) {
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

function firstEnglish(items, key) {
  for (const item of items) {
    if (item.language?.name === 'en') {
      return item[key];
    }
  }
  return null;
}

function formatFlavorText(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/\u000c/g, ' ')
    .trim();
}

function genderRatio(genderRate) {
  switch (genderRate) {
    case -1:
      return 'Genderless';
    case 0:
      return '100% male';
    case 1:
      return '87.5% male, 12.5% female';
    case 2:
      return '75% male, 25% female';
    case 4:
      return '50% male, 50% female';
    case 6:
      return '25% male, 75% female';
    case 8:
      return '100% female';
    default:
      return 'Unknown';
  }
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function fetchSpeciesList() {
  const root = await fetchJson(`${POKEAPI_SPECIES}?limit=${POKEAPI_LIMIT}`);
  return root.results.map((entry) => entry.name);
}

function mapStatName(stat) {
  switch (stat) {
    case 'hp': return 'hp';
    case 'attack': return 'atk';
    case 'defense': return 'def';
    case 'special-attack': return 'spa';
    case 'special-defense': return 'spd';
    case 'speed': return 'spe';
    default: return stat;
  }
}

function formatAbility(asset) {
  const name = asset.ability.name.replace(/-/g, ' ');
  return `${titleCase(name)}${asset.is_hidden ? ' (Hidden)' : ''}`;
}

function formatEggGroup(group) {
  return titleCase(group.name);
}

function formatGrowthRate(rate) {
  return titleCase(rate.name.replace(/-/g, ' '));
}

async function buildEntry(speciesName) {
  const species = await fetchJson(`${POKEAPI_SPECIES}/${speciesName}`);
  const defaultVariety = species.varieties.find((variety) => variety.is_default);
  const pokemonName = defaultVariety?.pokemon?.name || speciesName;
  const pokemon = await fetchJson(`${POKEAPI_POKEMON}/${pokemonName}`);

  const types = pokemon.types
    .sort((a, b) => a.slot - b.slot)
    .map((entry) => typeName(entry.type.name));

  const stats = pokemon.stats.reduce((acc, entry) => {
    const key = mapStatName(entry.stat.name);
    acc[key] = entry.base_stat;
    return acc;
  }, {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0,
  });

  const bst = Object.values(stats).reduce((sum, value) => sum + value, 0);

  const abilities = pokemon.abilities
    .sort((a, b) => a.slot - b.slot)
    .map(formatAbility);

  const descriptionRaw = firstEnglish(species.flavor_text_entries, 'flavor_text');
  const categoryRaw = firstEnglish(species.genera, 'genus');

  const displayName = normalizeName(species.name);
  const evolvesFrom = species.evolves_from_species
    ? { from: normalizeName(species.evolves_from_species.name), method: 'Unknown' }
    : null;

  const heldItems = {
    common: pokemon.held_items[0]?.item?.name ? titleCase(pokemon.held_items[0].item.name.replace(/-/g, ' ')) : null,
    rare: pokemon.held_items[1]?.item?.name ? titleCase(pokemon.held_items[1].item.name.replace(/-/g, ' ')) : null,
  };

  const evYield = pokemon.stats.reduce((acc, entry) => {
    const key = mapStatName(entry.stat.name);
    acc[key] = entry.effort;
    return acc;
  }, {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0,
  });

  return {
    id: species.id,
    name: displayName,
    types,
    stats,
    bst,
    abilities,
    category: categoryRaw || `${displayName} Pokémon`,
    height: pokemon.height * 0.1,
    weight: pokemon.weight * 0.1,
    description: descriptionRaw ? formatFlavorText(descriptionRaw) : '',
    catchRate: species.capture_rate,
    genderRatio: genderRatio(species.gender_rate),
    eggGroups: species.egg_groups.map(formatEggGroup),
    growthRate: formatGrowthRate(species.growth_rate),
    evYield,
    heldItems,
    learnset: {
      levelUp: [],
      tmhm: [],
      tutor: [],
      egg: [],
    },
    evolution: {
      evolvesFrom,
      evolvesTo: [],
    },
    locations: [],
  };
}

function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const speciesNames = await fetchSpeciesList();
  console.log(`Generating Pokédex for ${speciesNames.length} species...`);

  const entries = [];
  const batches = chunk(speciesNames, CONCURRENCY);

  for (let i = 0; i < batches.length; i += 1) {
    const batch = batches[i];
    const results = await Promise.all(batch.map(async (speciesName) => {
      try {
        const entry = await buildEntry(speciesName);
        process.stdout.write('.');
        return entry;
      } catch (error) {
        console.warn(`\n⚠ Failed to build ${speciesName}: ${error.message}`);
        return null;
      }
    }));
    entries.push(...results.filter(Boolean));
  }

  entries.sort((a, b) => a.id - b.id);

  const output = {
    generatedAt: new Date().toISOString(),
    pokemon: entries,
    moves: {},
  };

  await writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2));

  console.log(`\n✔ Pokédex generated: ${entries.length} entries written to ${OUTPUT_FILE}`);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
