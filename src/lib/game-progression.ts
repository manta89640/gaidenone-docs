/**
 * Pocket Gaiden 1 game progression - Pulp's journey from berry farmer to city dweller
 * Based on actual map connections and story script progression (v2.0)
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
  { type: 'chapter', label: 'Chapter 1: The Berry Farmer', description: 'Pulp harvests berries and dreams of a better life in Honzhu City.' },
  { type: 'starter', label: 'Pulp receives Dedenne', description: 'Start your journey with Dedenne, level 15.' },
  { type: 'landmark', label: 'Farmer Field', description: "Pulp's berry farm where the journey begins." },
  { type: 'route', label: 'Pulp Byroad', routeKeys: ['Pulp Byroad'], description: 'The broken-down truck blocks the road north. Pulp must walk east to Cho Village on foot.' },

  // -- Chapter 2: Cho Village & the Oracle --
  { type: 'chapter', label: 'Chapter 2: Cho Village & the Oracle', description: 'Travel east to Cho Village and seek the Oracle for guidance.' },
  { type: 'route', label: 'Shendown Path', routeKeys: ['Shendown Path'], description: 'The road east from Pulp Byroad to Cho Village.' },
  { type: 'trainer', label: 'Ling', trainerName: 'Ling' },
  { type: 'trainer', label: 'Bai', trainerName: 'Bai' },
  { type: 'trainer', label: 'Hong', trainerName: 'Hong' },
  { type: 'landmark', label: 'Cho Village', description: 'A quiet village where Pulp delivers berries and meets Log.' },
  { type: 'rival', label: 'Log - Cho Village', rivalLocation: '1st', description: 'First battle with childhood friend Log, a construction worker.' },
  { type: 'route', label: 'Wangyong Marsh', routeKeys: ['Wangyong Marsh'], description: 'A marshy area north of Cho Village.' },
  { type: 'trainer', label: 'Fan', trainerName: 'Fan' },
  { type: 'trainer', label: 'Bolin', trainerName: 'Bolin' },
  { type: 'trainer', label: 'Changpu', trainerName: 'Changpu' },
  { type: 'trainer', label: 'Kang', trainerName: 'Kang' },
  { type: 'trainer', label: 'Dandan', trainerName: 'Dandan' },
  { type: 'route', label: 'Wangyong Marsh 2', routeKeys: ['Wangyong Marsh 2'], description: 'The path north to Oracle Hill. Visit the house to receive the Berry Blender from the inventor.' },
  { type: 'trainer', label: 'Mai', trainerName: 'Mai' },
  { type: 'trainer', label: 'Huang', trainerName: 'Huang' },
  { type: 'trainer', label: 'Goufu', trainerName: 'Goufu' },
  { type: 'trainer', label: 'Pingzhang', trainerName: 'Pingzhang' },
  { type: 'trainer', label: 'Xinxie', trainerName: 'Xinxie' },
  { type: 'trainer', label: 'Cheng', trainerName: 'Cheng' },
  { type: 'route', label: 'Oracle Hill', routeKeys: ['Oracle Hill'], description: 'The Oracle sends Pulp on a quest for the Relic Crown hidden in the Color Ruins.' },
  { type: 'trainer', label: 'Xiu', trainerName: 'Xiu' },

  // -- Chapter 3: Kimyang Road & Yellow Ruins --
  { type: 'chapter', label: 'Chapter 3: Kimyang Road & Yellow Ruins', description: 'Explore Kimyang Road and the first Color Ruins.' },
  { type: 'route', label: 'Kimyang Road', routeKeys: ['Kimyang Road'], description: 'East of Wangyong Marsh, leading to the Yellow Ruins entrance.' },
  { type: 'trainer', label: 'Gen', trainerName: 'Gen' },
  { type: 'trainer', label: 'Nian', trainerName: 'Nian' },
  { type: 'trainer', label: 'Zeliang', trainerName: 'Zeliang' },
  { type: 'trainer', label: 'Minqiang', trainerName: 'Minqiang' },
  { type: 'route', label: 'Color Ruins (Yellow)', routeKeys: ['Color Ruins Yellow 1F', 'Color Ruins Yellow B1F'], description: 'The first Color Ruins, accessible from Kimyang Road.' },

  // -- Chapter 4: Cho Village Revisited --
  { type: 'chapter', label: 'Chapter 4: Cho Village Revisited', description: 'Return to Cho Village where Log has a surprise.' },
  { type: 'rival', label: 'Log - Cho Village Rematch', rivalLocation: '2nd', description: 'Log heals your party and challenges you to a rematch before building a bridge to the Red Ruins.' },

  // -- Chapter 5: Through the Forest --
  { type: 'chapter', label: 'Chapter 5: Through the Forest', description: 'Explore north through the Linking Tunnel to Tiyu Forest and more Color Ruins.' },
  { type: 'route', label: 'Linking Tunnel', routeKeys: ['Linking Tunnel'], description: 'A tunnel north of Pulp Byroad connecting to Tiyu Forest.' },
  { type: 'route', label: 'Tiyu Forest', routeKeys: ['Tiyu Forest'], description: 'A dense forest with bug catchers. Contains the entrance to Color Ruins (Green).' },
  { type: 'trainer', label: 'Shi', trainerName: 'Shi' },
  { type: 'trainer', label: 'Ping', trainerName: 'Ping' },
  { type: 'trainer', label: 'Chuntao', trainerName: 'Chuntao' },
  { type: 'trainer', label: 'Daiyu', trainerName: 'Daiyu' },
  { type: 'trainer', label: 'Peipei', trainerName: 'Peipei' },
  { type: 'route', label: 'Color Ruins (Green)', routeKeys: ['Color Ruins Green 1F'], description: 'Second Color Ruins, accessible from Tiyu Forest.' },
  { type: 'route', label: 'Color Ruins (Red)', routeKeys: ['Color Ruins Red 1F', 'Color Ruins Red B1F'], description: 'Third Color Ruins, now accessible thanks to the bridge Log built.' },

  // -- Chapter 6: Zhaoun Path & Blue Ruins --
  { type: 'chapter', label: 'Chapter 6: Zhaoun Path & Blue Ruins', description: 'Head south through Linking Tunnel to Zhaoun Path and the final Color Ruins.' },
  { type: 'route', label: 'Zhaoun Path', routeKeys: ['Zhaoun Path'], description: 'South of Linking Tunnel. Wild Pokemon jump out from the puddles.' },
  { type: 'trainer', label: 'Pengfei', trainerName: 'Pengfei' },
  { type: 'trainer', label: 'Yao', trainerName: 'Yao' },
  { type: 'trainer', label: 'Bowen', trainerName: 'Bowen' },
  { type: 'trainer', label: 'Meiling', trainerName: 'Meiling' },
  { type: 'trainer', label: 'Haoran', trainerName: 'Haoran' },
  { type: 'route', label: 'Color Ruins (Blue)', routeKeys: ['Color Ruins Blue 1F'], description: 'The final Color Ruins. Fall through the floor to discover Dark City!' },

  // -- Chapter 7: Dark City --
  { type: 'chapter', label: 'Chapter 7: Dark City', description: 'Discover an underground civilization and prove your worth in the Dark Tournament.' },
  { type: 'route', label: 'Dark City Entrance', routeKeys: ['Dark City Entrance'], description: 'Meet Arum, who explains the history of this underground city.' },
  { type: 'trainer', label: 'Lu', trainerName: 'Lu' },
  { type: 'trainer', label: 'Rue', trainerName: 'Rue' },
  { type: 'trainer', label: 'Guowei', trainerName: 'Guowei' },
  { type: 'landmark', label: 'Dark City', description: 'An underground civilization with hot springs, shops, and the Dark Tournament arena.' },
  { type: 'landmark', label: 'Dark Tournament', description: 'A 16-trainer 3v3 singles bracket. Win to earn the right to challenge the Dark Ruins.' },
  { type: 'boss', label: 'Wolfsbane', bossName: 'Wolfsbane', description: "Arum's son and 3-time defending champion of the Dark Tournament." },

  // -- Chapter 8: The Dark Ruins --
  { type: 'chapter', label: 'Chapter 8: The Dark Ruins', description: "Solve Arum's four puzzles to earn the Relic Crown." },
  { type: 'landmark', label: 'Dark Ruins', description: 'Four puzzle rooms created by Arum.' },
  { type: 'trainer', label: 'Huizhong', trainerName: 'Huizhong', description: 'Yellow Room puzzle trainer.' },
  { type: 'trainer', label: 'Baozhai', trainerName: 'Baozhai', description: 'Red Room puzzle trainer.' },
  { type: 'boss', label: 'Arum', bossName: 'Arum', bossLocation: 'Dark Ruins Final Room', description: 'Face Arum after solving all four puzzles to claim the Relic Crown.' },

  // -- Chapter 9: The Journey to Honzhu --
  { type: 'chapter', label: 'Chapter 9: The Journey to Honzhu', description: 'With the Relic Crown in hand, Pulp can finally afford to move to Honzhu City.' },
  { type: 'landmark', label: 'Xilong Walk', description: 'A route south of Farmer Field. Arum bids farewell here after bringing Pulp back to the surface.' },
  { type: 'trainer', label: 'Xiao', trainerName: 'Xiao' },
  { type: 'trainer', label: 'Hai', trainerName: 'Hai' },
  { type: 'trainer', label: 'Mei', trainerName: 'Mei' },
  { type: 'trainer', label: 'Bo', trainerName: 'Bo' },
  { type: 'trainer', label: 'Shan', trainerName: 'Shan' },
  { type: 'trainer', label: 'Yue', trainerName: 'Yue' },
  { type: 'boss', label: 'Oracle', bossName: 'Oracle', bossLocation: 'Oracle Hill Cave', description: 'The Oracle challenges you to a farewell battle after seeing the Relic Crown.' },
  { type: 'rival', label: 'Log - Final Battle', rivalLocation: 'Final', description: 'A farewell battle with Log before departing for Honzhu City.' },
  { type: 'landmark', label: 'Honzhu City', description: 'The bustling metropolis Pulp has always dreamed of reaching.' },
];
