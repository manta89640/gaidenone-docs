#!/usr/bin/env node

/**
 * Build script: placeholder for Pokédex data
 * NOTE: pokeemerald uses C structs instead of assembly - extraction would need to be rewritten
 * Data is in: gaidenone/src/data/pokemon/, include/constants/species.h, etc.
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, '..');
const OUTPUT_DIR = join(DOCS_DIR, 'public', 'data');
const OUTPUT_FILE = join(OUTPUT_DIR, 'pokedex.json');

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const placeholder = {
    generatedAt: new Date().toISOString(),
    pokemon: [],
    moves: {}
  };

  await writeFile(OUTPUT_FILE, JSON.stringify(placeholder, null, 2));

  console.log('⚠ Pokédex extraction not yet implemented for pokeemerald');
  console.log('  Would need to parse C structs from gaidenone/src/data/pokemon/');
  console.log('✓ Pokédex placeholder created');
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
