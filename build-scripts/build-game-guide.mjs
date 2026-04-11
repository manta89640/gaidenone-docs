#!/usr/bin/env node

/**
 * Build script: placeholder for game guide data
 * NOTE: pokeemerald trainers are in C format - would need parser rewrite
 * Data is in: gaidenone/src/data/trainers.h, src/data/trainer_parties.h
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, '..');
const OUTPUT_DIR = join(DOCS_DIR, 'public', 'data');
const OUTPUT_FILE = join(OUTPUT_DIR, 'game-guide.json');

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Placeholder guide data
  const guideData = {
    generatedAt: new Date().toISOString(),
    starters: [
      {
        species: "Dedenne",
        types: ["Electric", "Fairy"]
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
          { species: "Machop", level: 16 }
        ]
      },
      {
        rival: "Log",
        location: "Jam Key Map (Final)",
        party: [
          { species: "Machoke", level: 28 }
        ]
      }
    ],
    bossFights: [
      {
        name: "Arum",
        location: "Dark Ruins Final Room",
        type: "Puzzle Master",
        party: [
          { species: "Unknown", level: 30 }
        ]
      }
    ],
    routes: {}
  };

  await writeFile(OUTPUT_FILE, JSON.stringify(guideData, null, 2));

  console.log('⚠ Game guide extraction not yet implemented for pokeemerald');
  console.log('  Would need to parse C data from gaidenone/src/data/');
  console.log('✓ Game guide placeholder created');
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
