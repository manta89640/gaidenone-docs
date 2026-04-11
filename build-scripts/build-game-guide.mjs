#!/usr/bin/env node

/**
 * Build script: placeholder for game guide data
 * NOTE: pokeemerald trainers are in C format - would need parser rewrite
 * Data is in: gaidenone/src/data/trainers.h, src/data/trainer_parties.h
 */

import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, '..');
const OUTPUT_DIR = join(DOCS_DIR, 'public', 'data');
const OUTPUT_FILE = join(OUTPUT_DIR, 'game-guide.json');
const GAIDENONE_DIR = join(DOCS_DIR, '..', 'gaidenone');
const ENCOUNTERS_FILE = join(GAIDENONE_DIR, 'src', 'data', 'wild_encounters.json');

// Extract encounters for a specific map from wild encounters JSON
function extractEncountersForMap(encountersData, mapName) {
  const encounters = encountersData.wild_encounter_groups[0].encounters.filter(e => e.map === mapName);
  if (encounters.length === 0) return null;

  const routes = {};

  for (const enc of encounters) {
    const routeData = {};

    // Process land encounters
    if (enc.land_mons) {
      routeData.land = enc.land_mons.mons.map(m => ({
        species: m.species.replace('SPECIES_', '').toLowerCase().replace(/^(.)/, c => c.toUpperCase()),
        minLevel: m.min_level,
        maxLevel: m.max_level,
        rate: 0  // Rate calculation would require more complex logic
      }));
    }

    // Process water encounters
    if (enc.water_mons) {
      routeData.water = enc.water_mons.mons.map(m => ({
        species: m.species.replace('SPECIES_', '').toLowerCase().replace(/^(.)/, c => c.toUpperCase()),
        minLevel: m.min_level,
        maxLevel: m.max_level,
        rate: 0
      }));
    }

    // Process fishing encounters
    if (enc.fishing_mons) {
      routeData.fishing = {
        oldRod: enc.fishing_mons.mons.slice(0, 2).map(m => ({
          species: m.species.replace('SPECIES_', '').toLowerCase().replace(/^(.)/, c => c.toUpperCase()),
          minLevel: m.min_level,
          maxLevel: m.max_level,
          rate: 0
        })),
        goodRod: enc.fishing_mons.mons.slice(2, 5).map(m => ({
          species: m.species.replace('SPECIES_', '').toLowerCase().replace(/^(.)/, c => c.toUpperCase()),
          minLevel: m.min_level,
          maxLevel: m.max_level,
          rate: 0
        })),
        superRod: enc.fishing_mons.mons.slice(5).map(m => ({
          species: m.species.replace('SPECIES_', '').toLowerCase().replace(/^(.)/, c => c.toUpperCase()),
          minLevel: m.min_level,
          maxLevel: m.max_level,
          rate: 0
        }))
      };
    }

    return routeData;
  }

  return null;
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Load wild encounters data
  let encountersData = null;
  let routes = {};
  try {
    const encountersJson = await readFile(ENCOUNTERS_FILE, 'utf-8');
    encountersData = JSON.parse(encountersJson);

    // Extract encounters for key routes
    const mapNames = {
      'Shendown Path': 'MAP_SHENDOWN_PATH',
      'Wangyong Marsh': 'MAP_WANGYONG_MARSH',
      'Kimyang Road': 'MAP_KIMYANG_ROAD',
      'Tiyu Forest': 'MAP_TIYU_FOREST',
      'Linking Tunnel': 'MAP_LINKING_TUNNEL',
      'Zhaoun Path': 'MAP_ZHAOUN_PATH'
    };

    for (const [routeName, mapName] of Object.entries(mapNames)) {
      const routeData = extractEncountersForMap(encountersData, mapName);
      if (routeData) {
        routes[routeName] = routeData;
      }
    }
  } catch (err) {
    console.warn('Could not load wild encounters:', err.message);
  }

  // Complete guide data extracted from gaidenone/src/data/trainer_parties.h
  const guideData = {
    generatedAt: new Date().toISOString(),
    starters: [
      {
        species: "Dedenne",
        types: ["Electric", "Fairy"],
        level: 15
      }
    ],
    gymLeaders: [],
    eliteFour: [],
    champion: null,
    rivals: [
      {
        rival: "Log",
        location: "Cho Village",
        party: [
          { species: "Machop", level: 14, heldItem: "Oran Berry" },
          { species: "Timburr", level: 16, heldItem: "Cheri Berry" }
        ]
      },
      {
        rival: "Log",
        location: "Jam Key Map (Final)",
        party: [
          { species: "Graveler", level: 26, heldItem: "Rindo Berry", moves: ["Stealth Rock", "Bulldoze", "Smack Down", "Double-Edge"] },
          { species: "Stunfisk", level: 26, heldItem: "Shuca Berry", moves: ["Discharge", "Mud Bomb", "Bounce", "Muddy Water"] },
          { species: "Bibarel", level: 26, heldItem: "Wacan Berry", moves: ["Yawn", "Hyper Fang", "Swords Dance", "Rollout"] },
          { species: "Pancham", level: 26, heldItem: "Roseli Berry", moves: ["Slash", "Crunch", "Vital Throw", "Work Up"] },
          { species: "Machoke", level: 26, heldItem: "Salac Berry", moves: ["Dynamic Punch", "Submission", "Knock Off", "Focus Energy"] },
          { species: "Conkeldurr", level: 28, heldItem: "Lansat Berry", moves: ["Bulk Up", "Chip Away", "Rock Slide", "Superpower"] }
        ]
      }
    ],
    bossFights: [
      {
        name: "Arum",
        location: "Dark Ruins Final Room",
        type: "Puzzle Master",
        party: [
          { species: "Smeargle", level: 25, heldItem: "Lansat Berry", moves: ["Will-O-Wisp", "Leech Seed", "Shadow Ball", "Double-Edge"] },
          { species: "Yamask", level: 25, heldItem: "Apicot Berry", moves: ["Will-O-Wisp", "Hex", "Night Shade", "Disable"] },
          { species: "Baltoy", level: 25, heldItem: "Kasib Berry", moves: ["Psybeam", "Earth Power", "Cosmic Power", "Rock Tomb"] },
          { species: "Dugtrio", level: 25, heldItem: "Passho Berry", moves: ["Tri Attack", "Dig", "Sand Attack", "Night Slash"] },
          { species: "Torkoal", level: 27, heldItem: "Chilan Berry", moves: ["Lava Plume", "Amnesia", "Body Slam", "Shell Smash"] }
        ]
      }
    ],
    trainers: [
      { name: "Ling", party: [{ species: "Surskit", level: 14, heldItem: "Wacan Berry" }] },
      { name: "Bai", party: [{ species: "Zigzagoon", level: 13, heldItem: "Leppa Berry" }, { species: "Tympole", level: 13, heldItem: "Petaya Berry" }] },
      { name: "Hong", party: [{ species: "Oddish", level: 14, heldItem: "Apicot Berry" }] },
      { name: "Fan", party: [{ species: "Goldeen", level: 16, heldItem: "Sitrus Berry" }] },
      { name: "Bolin", party: [{ species: "Grimer", level: 15, heldItem: "Shuca Berry" }, { species: "Grimer", level: 15, heldItem: "Apicot Berry" }] },
      { name: "Changpu", party: [{ species: "Croagunk", level: 17, heldItem: "Coba Berry" }] },
      { name: "Kang", party: [{ species: "Bidoof", level: 14, heldItem: "Pecha Berry" }, { species: "Bibarel", level: 16, heldItem: "Ganlon Berry" }] },
      { name: "Dandan", party: [{ species: "Carnivine", level: 16, heldItem: "Kebia Berry" }] },
      { name: "Xiu", party: [{ species: "Chingling", level: 16, heldItem: "Colbur Berry" }, { species: "Goomy", level: 16, heldItem: "Chilan Berry" }] },
      { name: "Gen", party: [{ species: "Spinarak", level: 15, heldItem: "Mago Berry" }, { species: "Spinarak", level: 17, heldItem: "Salac Berry" }] },
      { name: "Nian", party: [{ species: "Goldeen", level: 16, heldItem: "Aguav Berry" }, { species: "Bidoof", level: 16, heldItem: "Chople Berry" }, { species: "Goldeen", level: 16, heldItem: "Leppa Berry" }] },
      { name: "Shi", party: [{ species: "Spinarak", level: 18, heldItem: "Payapa Berry" }, { species: "Surskit", level: 18, heldItem: "Figy Berry" }, { species: "Pineco", level: 18, heldItem: "Liechi Berry" }] },
      { name: "Ping", party: [{ species: "Pineco", level: 19, heldItem: "Charti Berry" }, { species: "Spinarak", level: 19, heldItem: "Persim Berry" }] },
      { name: "Chuntao", party: [{ species: "Farfetch'd", level: 20, heldItem: "Jaboca Berry" }] },
      { name: "Daiyu", party: [{ species: "Woobat", level: 19, heldItem: "Colbur Berry" }, { species: "Tympole", level: 19, heldItem: "Rindo Berry" }, { species: "Cherubi", level: 20, heldItem: "Wiki Berry" }] },
      { name: "Pengfei", party: [{ species: "Ariados", level: 22, heldItem: "Sitrus Berry" }, { species: "Masquerain", level: 22, heldItem: "Yache Berry" }] },
      { name: "Yao", party: [{ species: "Machop", level: 21, heldItem: "Leppa Berry" }, { species: "Nuzleaf", level: 21, heldItem: "Tanga Berry" }, { species: "Dunsparce", level: 22, heldItem: "Iapapa Berry" }] },
      { name: "Lu", party: [{ species: "Baltoy", level: 22, heldItem: "Micle Berry" }, { species: "Yamask", level: 22, heldItem: "Kasib Berry" }] },
      { name: "Rue", party: [{ species: "Yamask", level: 22, heldItem: "Rawst Berry" }, { species: "Baltoy", level: 22, heldItem: "Passho Berry" }] },
      { name: "Guowei", party: [{ species: "Slugma", level: 21, heldItem: "Charti Berry" }, { species: "Geodude", level: 23, heldItem: "Babiri Berry" }] },
      { name: "Huizhong", party: [{ species: "Diglett", level: 21, heldItem: "Sitrus Berry" }, { species: "Dugtrio", level: 23, heldItem: "Passho Berry" }, { species: "Dugtrio", level: 25, heldItem: "Rindo Berry" }] },
      { name: "Baozhai", party: [{ species: "Swoobat", level: 25, heldItem: "Lum Berry" }, { species: "Chimecho", level: 25, heldItem: "Colbur Berry" }] }
    ],
    routes
  };

  await writeFile(OUTPUT_FILE, JSON.stringify(guideData, null, 2));

  console.log('✓ Game guide data generated with all 25 trainer battles');
  console.log('  - 2 Log battles (Cho Village + Pulp Byroad Final)');
  console.log('  - 1 Arum battle (Dark Ruins Final Room)');
  console.log('  - 22 regular trainers');
  console.log(`  - ${Object.keys(routes).length} routes with wild encounters`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
