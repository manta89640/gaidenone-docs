#!/usr/bin/env node

/**
 * Build script: placeholder for journal generation
 * NOTE: Pocket Gaiden 1 doesn't have an agent journal system like Agent Elm
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, '..');
const OUTPUT_DIR = join(DOCS_DIR, 'public', 'data');
const OUTPUT_FILE = join(OUTPUT_DIR, 'journals.json');

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Pocket Gaiden 1 doesn't have journals - write empty array
  await writeFile(OUTPUT_FILE, JSON.stringify([], null, 2));

  console.log('✓ Journals placeholder created');
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
