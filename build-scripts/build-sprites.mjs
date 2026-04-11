#!/usr/bin/env node

/**
 * Build script: downloads official Pokémon front sprites from PokeAPI and
 * writes them into docs/public/sprites/{dexId}.png.
 *
 * This avoids local ROM asset extraction in the docs repository.
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, '..');
const OUTPUT_DIR = join(DOCS_DIR, 'public', 'sprites');
const POKEAPI_BASE = 'https://pokeapi.co/api/v2/pokemon';
const MAX_POKEMON = 386;
const CONCURRENCY = 10;

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function fetchSpriteUrl(dexId) {
  const data = await fetchJson(`${POKEAPI_BASE}/${dexId}`);
  const spriteUrl = data?.sprites?.front_default || data?.sprites?.front_shiny;
  if (!spriteUrl) {
    throw new Error(`No front sprite available for Pokédex #${dexId}`);
  }
  return spriteUrl;
}

async function downloadSprite(dexId) {
  const spriteUrl = await fetchSpriteUrl(dexId);
  const response = await fetch(spriteUrl);
  if (!response.ok) {
    throw new Error(`Failed to download sprite for #${dexId}: ${response.status} ${response.statusText}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(join(OUTPUT_DIR, `${dexId}.png`), buffer);
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  console.log(`Downloading ${MAX_POKEMON} sprites from PokeAPI into ${OUTPUT_DIR}...`);

  const ids = Array.from({ length: MAX_POKEMON }, (_, index) => index + 1);

  for (let i = 0; i < ids.length; i += CONCURRENCY) {
    const batch = ids.slice(i, i + CONCURRENCY);
    await Promise.all(
      batch.map(async (dexId) => {
        try {
          await downloadSprite(dexId);
          process.stdout.write(`.${dexId}`);
        } catch (error) {
          console.warn(`\n⚠ Skipped #${dexId}: ${error.message}`);
        }
      }),
    );
  }

  console.log(`\n✔ Sprite download complete.`);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
