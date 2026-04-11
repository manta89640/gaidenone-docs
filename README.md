# Pocket Gaiden 1 — Documentation Site

This is the documentation website for **Pocket Gaiden 1**, a Pokémon ROM hack by Mantager.

## About Pocket Gaiden 1

You play as **Pulp**, a berry farmer in rural poverty who dreams of moving to **Honzhu City**. This is not a traditional Pokémon game — there are no gyms, no badges, no Pokémon League. Instead, you explore ancient Color Ruins, discover an underground civilization in Dark City, and solve Arum's puzzles to earn the legendary Relic Crown.

**Key Features:**
- Story-driven progression (no gyms or badges)
- Non-traditional starter: Dedenne (level 15)
- Chinese-inspired setting with grounded cultural themes
- Puzzle dungeons: Color Ruins and Dark Ruins
- Realistic protagonist motivated by escaping poverty
- **23 trainers total** (very focused roster compared to vanilla Emerald)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build data from ROM source (requires ../gaidenone)
npm run build:data

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

This site automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup Instructions:**
1. Go to your GitHub repository settings
2. Navigate to **Pages** (under "Code and automation")
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Push to `main` branch — the site will build and deploy automatically!

Your site will be available at: `https://[your-username].github.io/gaidenone-docs/`

## Technology

- **ROM Base:** pokeemerald (Pokémon Emerald decompilation)
- **Platform:** Game Boy Advance
- **Framework:** React + TypeScript + Vite
- **Sprites:** Sourced from pokeemerald graphics data
- **Deployment:** GitHub Pages via GitHub Actions

## Project Structure

```
src/
├── components/     # React components (Layout, Cards, Sprites, etc.)
├── lib/            # Core data and utilities
│   ├── game-progression.ts  # Story progression map (corrected via warp analysis)
│   ├── pokemon-dex.ts       # Pokémon sprite ID mapping
│   ├── types.ts            # TypeScript interfaces
│   └── type-utils.ts       # Type badge utilities
├── pages/          # Route pages (About, Guide, Pokedex, etc.)
└── styles/         # Global CSS

build-scripts/      # Data extraction from ROM source (placeholder for pokeemerald)
public/data/        # JSON data (currently hand-crafted with all 23 trainers)
.github/workflows/  # GitHub Actions for deployment
```

## Game Data

The site includes data for all trainers in Pocket Gaiden 1:

**Rivals:**
- Log (2 battles - Cho Village and final battle at Jam Key Map)

**Boss:**
- Arum (Dark Ruins Final Room)

**Regular Trainers (21 total):**
Ling, Bai, Hong, Fan, Bolin, Changpu, Kang, Dandan, Xiu, Gen, Nian, Shi, Ping, Chuntao, Daiyu, Pengfei, Yao, Lu, Rue, Guowei, Huizhong, Baozhai

## Data Sources

The site displays data extracted/hand-crafted from the `../gaidenone` ROM source:
- Trainer parties → `public/data/game-guide.json` (complete with all 23 trainers)
- Game progression → `src/lib/game-progression.ts` (verified via map warp analysis)
- Pokémon stats, learnsets → `public/data/pokedex.json` (placeholder)
- Release history → `public/data/releases.json` (placeholder)

**Note:** Build scripts are placeholders because pokeemerald uses C code instead of assembly. Data extraction would need to be rewritten to parse C structs.

## License

This is a fan project based on Pokémon Emerald. All Pokémon characters and trademarks are © Nintendo/Creatures Inc./GAME FREAK inc.
