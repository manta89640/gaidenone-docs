#!/usr/bin/env node

/**
 * Build script: placeholder for sprite copying
 * NOTE: pokeemerald has a different graphics structure than pokecrystal
 * This would need to be adapted to extract from pokeemerald's graphics/pokemon/ directory
 */

import { mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, '..');
const OUTPUT_DIR = join(DOCS_DIR, 'public', 'sprites');

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  console.log('⚠ Sprite extraction not yet implemented for pokeemerald');
  console.log('  Sprites would need to be extracted from gaidenone/graphics/pokemon/');
  console.log('✓ Sprites directory created');
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
