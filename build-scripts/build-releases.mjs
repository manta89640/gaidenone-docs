#!/usr/bin/env node

/**
 * Build script: placeholder for release data
 * NOTE: This would need to fetch from the gaidenone repository if releases exist
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, '..');
const OUTPUT_DIR = join(DOCS_DIR, 'public', 'data');
const OUTPUT_FILE = join(OUTPUT_DIR, 'releases.json');

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Placeholder - would need to fetch from GitHub API for gaidenone releases
  await writeFile(OUTPUT_FILE, JSON.stringify([], null, 2));

  console.log('✓ Releases placeholder created');
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
