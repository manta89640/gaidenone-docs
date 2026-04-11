/**
 * Pocket Gaiden 1 game progression - Pulp's journey from berry farmer to city dweller
 * Based on actual map connections and warps from gaidenone source
 * Corrected via thorough warp analysis
 */

export interface ProgressionStep {
  type: 'starter' | 'route' | 'gym' | 'rival' | 'elite-four' | 'champion' | 'landmark' | 'chapter' | 'boss';
  label: string;
  routeKeys?: string[];
  gymNumber?: number;
  location?: string;
  rivalLocation?: string;
  bossName?: string;
  bossLocation?: string;
  description?: string;
}

export const GAME_PROGRESSION: ProgressionStep[] = [
  // -- Chapter 1: The Berry Farmer --
  { type: 'chapter', label: 'Chapter 1: The Berry Farmer', description: 'Pulp harvests berries and dreams of escaping rural poverty.' },
  { type: 'starter', label: 'Pulp receives Dedenne', description: 'Start your journey with Dedenne, level 15.' },
  { type: 'landmark', label: 'Farmer Field', description: 'Pulps berry farm where the journey begins.' },
  { type: 'route', label: 'Jam Key Map', routeKeys: ['Jam Key Map'], description: 'Your starting area with the broken-down truck.' },

  // -- Chapter 2: North Through Linking Tunnel --
  { type: 'chapter', label: 'Chapter 2: Linking Tunnel & Tiyu Forest', description: 'Explore north through the tunnel to Tiyu Forest.' },
  { type: 'route', label: 'Linking Tunnel', routeKeys: ['Linking Tunnel'], description: 'A tunnel north of Jam Key Map. Diglett block the path to Zhaoun Path (unlocked later).' },
  { type: 'route', label: 'Tiyu Forest', routeKeys: ['Tiyu Forest'], description: 'A dense forest with bug catchers. Contains entrance to Color Ruins (Green).' },
  { type: 'route', label: 'Color Ruins (Green)', routeKeys: ['Color Ruins Green 1F', 'Color Ruins Green B1F'], description: 'First Color Ruins, accessible from Tiyu Forest.' },

  // -- Chapter 3: Cho Village & Oracle Quest --
  { type: 'chapter', label: 'Chapter 3: Cho Village & Oracle Quest', description: 'Travel west to Cho Village and get the Oracle quest.' },
  { type: 'route', label: 'Shendown Path', routeKeys: ['Shendown Path'], description: 'West from Jam Key Map to Cho Village.' },
  { type: 'landmark', label: 'Cho Village', description: 'A quiet village where Pulp delivers berries and meets Log.' },
  { type: 'rival', label: 'Log - Cho Village', rivalLocation: 'Cho Village', description: 'First battle with childhood friend Log, a construction worker.' },
  { type: 'route', label: 'Wangyong Marsh', routeKeys: ['Wangyong Marsh'], description: 'North of Cho Village.' },
  { type: 'route', label: 'Kimyang Road', routeKeys: ['Kimyang Road'] },
  { type: 'landmark', label: 'Oracle Hill', description: 'The Oracle sends Pulp on a quest for the Relic Crown hidden in the Color Ruins.' },

  // -- Chapter 4: More Color Ruins --
  { type: 'chapter', label: 'Chapter 4: Yellow and Red Ruins', description: 'Explore the Yellow and Red Color Ruins.' },
  { type: 'route', label: 'Color Ruins (Yellow)', routeKeys: ['Color Ruins Yellow 1F', 'Color Ruins Yellow B1F'] },
  { type: 'route', label: 'Color Ruins (Red)', routeKeys: ['Color Ruins Red 1F', 'Color Ruins Red B1F'], description: 'Log builds a bridge to make this accessible.' },

  // -- Chapter 5: Zhaoun Path & Blue Ruins --
  { type: 'chapter', label: 'Chapter 5: Zhaoun Path Opens', description: 'After exploring ruins, Diglett wake and clear the path to Zhaoun.' },
  { type: 'route', label: 'Zhaoun Path', routeKeys: ['Zhaoun Path'], description: 'Now accessible through Linking Tunnel. A path with suspiciously little tall grass, leads to Blue Ruins.' },
  { type: 'route', label: 'Color Ruins (Blue)', routeKeys: ['Color Ruins Blue 1F', 'Color Ruins Blue B1F'], description: 'Accessed from Zhaoun Path. Fall through the floor to discover Dark City!' },

  // -- Chapter 6: Dark City --
  { type: 'chapter', label: 'Chapter 6: Dark City', description: 'Discover an underground civilization and meet Arum, owner of the Relic Crown.' },
  { type: 'landmark', label: 'Dark City Entrance', description: 'Meet Arum, who explains the history of this underground city.' },
  { type: 'landmark', label: 'Dark City Main', description: 'An entire civilization built deep underground with hot springs and a general store.' },

  // -- Chapter 7: The Dark Ruins --
  { type: 'chapter', label: 'Chapter 7: The Dark Ruins', description: 'Solve Arums four puzzles to earn the Relic Crown.' },
  { type: 'route', label: 'Dark Ruins', routeKeys: ['Dark Ruins'], description: 'Four puzzle rooms created by Arum.' },
  { type: 'boss', label: 'Arum - Dark Ruins Final Room', bossName: 'Arum', bossLocation: 'Dark Ruins Final Room', description: 'Face Arum after solving all four puzzles to claim the Relic Crown.' },

  // -- Chapter 8: Journey to Honzhu --
  { type: 'chapter', label: 'Chapter 8: The Journey to Honzhu', description: 'With the Relic Crown in hand, Pulp can finally afford to move to Honzhu City.' },
  { type: 'rival', label: 'Log - Final Battle', rivalLocation: 'Jam Key Map', description: 'A farewell battle with Log before departing for the city.' },
  { type: 'landmark', label: 'Honzhu City', description: 'The bustling metropolis Pulp has always dreamed of reaching.' },
];
