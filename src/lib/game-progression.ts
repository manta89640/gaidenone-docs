/**
 * Pocket Gaiden 1 game progression - Pulp's journey from berry farmer to city dweller
 * Based on actual map connections and warps from gaidenone source
 * Corrected via thorough warp analysis
 */

export interface ProgressionStep {
  type: 'starter' | 'route' | 'gym' | 'rival' | 'elite-four' | 'champion' | 'landmark' | 'chapter' | 'boss' | 'trainer';
  label: string;
  routeKeys?: string[];
  gymNumber?: number;
  location?: string;
  rivalLocation?: string;
  bossName?: string;
  bossLocation?: string;
  trainerName?: string;
  description?: string;
}

export const GAME_PROGRESSION: ProgressionStep[] = [
  // -- Chapter 1: The Berry Farmer --
  { type: 'chapter', label: 'Chapter 1: The Berry Farmer', description: 'Pulp harvests berries and dreams of escaping rural poverty.' },
  { type: 'starter', label: 'Pulp receives Dedenne', description: 'Start your journey with Dedenne, level 15.' },
  { type: 'landmark', label: 'Farmer Field', description: 'Pulps berry farm where the journey begins.' },
  { type: 'route', label: 'Pulp Byroad', routeKeys: ['Pulp Byroad'], description: 'Your starting area with the broken-down truck.' },

  // -- Chapter 2: Cho Village & Oracle Quest --
  { type: 'chapter', label: 'Chapter 2: Cho Village & Oracle Quest', description: 'Travel west to Cho Village and get the Oracle quest.' },
  { type: 'route', label: 'Shendown Path', routeKeys: ['Shendown Path'], description: 'West from Pulp Byroad to Cho Village.' },
  { type: 'trainer', label: 'Ling', trainerName: 'Ling' },
  { type: 'trainer', label: 'Bai', trainerName: 'Bai' },
  { type: 'trainer', label: 'Hong', trainerName: 'Hong' },
  { type: 'landmark', label: 'Cho Village', description: 'A quiet village where Pulp delivers berries and meets Log.' },
  { type: 'rival', label: 'Log - Cho Village', rivalLocation: 'Cho Village', description: 'First battle with childhood friend Log, a construction worker.' },
  { type: 'route', label: 'Wangyong Marsh', routeKeys: ['Wangyong Marsh'], description: 'North of Cho Village.' },
  { type: 'trainer', label: 'Fan', trainerName: 'Fan' },
  { type: 'trainer', label: 'Bolin', trainerName: 'Bolin' },
  { type: 'trainer', label: 'Changpu', trainerName: 'Changpu' },
  { type: 'trainer', label: 'Kang', trainerName: 'Kang' },
  { type: 'trainer', label: 'Dandan', trainerName: 'Dandan' },
  { type: 'route', label: 'Kimyang Road', routeKeys: ['Kimyang Road'] },
  { type: 'trainer', label: 'Gen', trainerName: 'Gen' },
  { type: 'trainer', label: 'Nian', trainerName: 'Nian' },
  { type: 'landmark', label: 'Oracle Hill', description: 'The Oracle sends Pulp on a quest for the Relic Crown hidden in the Color Ruins.' },
  { type: 'trainer', label: 'Xiu', trainerName: 'Xiu' },

  // -- Chapter 3: Linking Tunnel & First Color Ruins --
  { type: 'chapter', label: 'Chapter 3: Linking Tunnel & Tiyu Forest', description: 'Explore north through the tunnel to Tiyu Forest and the first Color Ruins.' },
  { type: 'route', label: 'Linking Tunnel', routeKeys: ['Linking Tunnel'], description: 'A tunnel north of Pulp Byroad. Diglett block the path to Zhaoun Path (unlocked later).' },
  { type: 'route', label: 'Tiyu Forest', routeKeys: ['Tiyu Forest'], description: 'A dense forest with bug catchers. Contains entrance to Color Ruins (Green).' },
  { type: 'trainer', label: 'Shi', trainerName: 'Shi' },
  { type: 'trainer', label: 'Ping', trainerName: 'Ping' },
  { type: 'trainer', label: 'Chuntao', trainerName: 'Chuntao' },
  { type: 'trainer', label: 'Daiyu', trainerName: 'Daiyu' },
  { type: 'route', label: 'Color Ruins (Green)', routeKeys: ['Color Ruins Green 1F', 'Color Ruins Green B1F'], description: 'First Color Ruins, accessible from Tiyu Forest.' },

  // -- Chapter 4: More Color Ruins --
  { type: 'chapter', label: 'Chapter 4: Yellow and Red Ruins', description: 'Explore the Yellow and Red Color Ruins.' },
  { type: 'route', label: 'Color Ruins (Yellow)', routeKeys: ['Color Ruins Yellow 1F', 'Color Ruins Yellow B1F'] },
  { type: 'route', label: 'Color Ruins (Red)', routeKeys: ['Color Ruins Red 1F', 'Color Ruins Red B1F'], description: 'Log builds a bridge to make this accessible.' },

  // -- Chapter 5: Zhaoun Path & Blue Ruins --
  { type: 'chapter', label: 'Chapter 5: Zhaoun Path Opens', description: 'After exploring ruins, Diglett wake and clear the path to Zhaoun.' },
  { type: 'route', label: 'Zhaoun Path', routeKeys: ['Zhaoun Path'], description: 'Now accessible through Linking Tunnel. A path with suspiciously little tall grass, leads to Blue Ruins.' },
  { type: 'trainer', label: 'Pengfei', trainerName: 'Pengfei' },
  { type: 'trainer', label: 'Yao', trainerName: 'Yao' },
  { type: 'route', label: 'Color Ruins (Blue)', routeKeys: ['Color Ruins Blue 1F', 'Color Ruins Blue B1F'], description: 'Accessed from Zhaoun Path. Fall through the floor to discover Dark City!' },

  // -- Chapter 6: Dark City --
  { type: 'chapter', label: 'Chapter 6: Dark City', description: 'Discover an underground civilization and meet Arum, owner of the Relic Crown.' },
  { type: 'landmark', label: 'Dark City Entrance', description: 'Meet Arum, who explains the history of this underground city.' },
  { type: 'trainer', label: 'Lu', trainerName: 'Lu' },
  { type: 'trainer', label: 'Rue', trainerName: 'Rue' },
  { type: 'trainer', label: 'Guowei', trainerName: 'Guowei' },
  { type: 'landmark', label: 'Dark City Main', description: 'An entire civilization built deep underground with hot springs and a general store.' },

  // -- Chapter 7: The Dark Ruins --
  { type: 'chapter', label: 'Chapter 7: The Dark Ruins', description: 'Solve Arums four puzzles to earn the Relic Crown.' },
  { type: 'route', label: 'Dark Ruins', routeKeys: ['Dark Ruins'], description: 'Four puzzle rooms created by Arum.' },
  { type: 'trainer', label: 'Huizhong', trainerName: 'Huizhong', description: 'Yellow Room puzzle trainer.' },
  { type: 'trainer', label: 'Baozhai', trainerName: 'Baozhai', description: 'Red Room puzzle trainer.' },
  { type: 'boss', label: 'Arum - Dark Ruins Final Room', bossName: 'Arum', bossLocation: 'Dark Ruins Final Room', description: 'Face Arum after solving all four puzzles to claim the Relic Crown.' },

  // -- Chapter 8: Journey to Honzhu --
  { type: 'chapter', label: 'Chapter 8: The Journey to Honzhu', description: 'With the Relic Crown in hand, Pulp can finally afford to move to Honzhu City.' },
  { type: 'rival', label: 'Log - Final Battle', rivalLocation: 'Pulp Byroad', description: 'A farewell battle with Log before departing for the city.' },
  { type: 'landmark', label: 'Honzhu City', description: 'The bustling metropolis Pulp has always dreamed of reaching.' },
];
