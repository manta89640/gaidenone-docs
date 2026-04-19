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
  // ── Act I: Meet the Oracle ──
  { type: 'chapter', label: 'Act I: Meet the Oracle', description: 'Pulp sets out from his berry farm to find the Oracle and learn the legend of the Relic Crown.' },
  { type: 'starter', label: 'Pulp receives Dedenne', description: 'Start your journey with Dedenne, level 15.' },
  { type: 'landmark', label: 'Farmer Field', description: "Pulp's berry farm where the journey begins." },
  { type: 'route', label: 'Pulp Byroad', routeKeys: ['Pulp Byroad'], description: 'The broken-down truck blocks the road north. Pulp must walk east to Cho Village on foot.' },
  { type: 'route', label: 'Shendown Path', routeKeys: ['Shendown Path'], description: 'The road east from Pulp Byroad to Cho Village.' },
  { type: 'trainer', label: 'Ling', trainerName: 'Ling', description: '"Our eyes met! Looks like we\'ve got ourselves a battle!"' },
  { type: 'trainer', label: 'Bai', trainerName: 'Bai', description: '"Taking the long way to Cho today? You must be pretty confident!"' },
  { type: 'trainer', label: 'Hong', trainerName: 'Hong', description: '"I waited for you because I wanted to beat you!"' },
  { type: 'landmark', label: 'Cho Village', description: 'A quiet village where Pulp delivers berries and meets Log.' },
  { type: 'rival', label: 'Log - Cho Village', rivalLocation: '1st', description: 'First battle with childhood friend Log, a construction worker.' },
  { type: 'route', label: 'Wangyong Marsh', routeKeys: ['Wangyong Marsh'], description: 'A marshy area north of Cho Village.' },
  { type: 'trainer', label: 'Fan', trainerName: 'Fan', description: '"I almost had that one! Why, you..."' },
  { type: 'trainer', label: 'Bolin', trainerName: 'Bolin', description: '"This is the perfect spot to fish! I\'m sure of it."' },
  { type: 'trainer', label: 'Changpu', trainerName: 'Changpu', description: '"Wachaaa! Get too close and I\'ll kick those Poke Balls out of your hands!"' },
  { type: 'trainer', label: 'Kang', trainerName: 'Kang', description: '"You\'re going to see the Oracle? Who has time for that?"' },
  { type: 'trainer', label: 'Dandan', trainerName: 'Dandan', description: '"I caught a Carnivine to help me make clothes, but it just chews my fabric..."' },
  { type: 'route', label: 'Wangyong Marsh 2', routeKeys: ['Wangyong Marsh 2'], description: 'The path north to Oracle Hill. Visit the house to receive the Berry Blender from the inventor.' },
  { type: 'trainer', label: 'Mai', trainerName: 'Mai', description: '"Dad yelled at me because I dropped all our cooking oil on the floor!"' },
  { type: 'trainer', label: 'Huang', trainerName: 'Huang', description: '"I\'m looking for anything I can trade. They say there\'s gold in this marsh!"' },
  { type: 'trainer', label: 'Goufu', trainerName: 'Goufu', description: '"I cast away worldly desire. Only discipline remains!"' },
  { type: 'trainer', label: 'Pingzhang', trainerName: 'Pingzhang', description: '"No bites, no breeze, no excitement. A battle will pass the time."' },
  { type: 'trainer', label: 'Xinxie', trainerName: 'Xinxie', description: '"Hand over your cash, or I\'ll take it after I win!"' },
  { type: 'trainer', label: 'Cheng', trainerName: 'Cheng', description: '"My wife said stop fretting and take a day off. But now I\'m worried!"' },
  { type: 'route', label: 'Oracle Hill', routeKeys: ['Oracle Hill'], description: 'The Oracle sends Pulp on a quest for the Relic Crown hidden in the Color Ruins.' },
  { type: 'trainer', label: 'Xiu', trainerName: 'Xiu', description: '"Check out my adorable little Pokemon friends!"' },

  // ── Act II: The Color Ruins ──
  { type: 'chapter', label: 'Act II: The Color Ruins', description: 'Explore the four ancient Color Ruins and discover an underground civilization.' },
  { type: 'route', label: 'Kimyang Road', routeKeys: ['Kimyang Road'], description: 'East of Wangyong Marsh, leading to the Yellow Ruins entrance.' },
  { type: 'trainer', label: 'Gen', trainerName: 'Gen', description: '"Trainer detected! Spinarak, let\'s go!"' },
  { type: 'trainer', label: 'Nian', trainerName: 'Nian', description: '"A battle, huh? Make it quick!"' },
  { type: 'trainer', label: 'Zeliang', trainerName: 'Zeliang', description: '"Don\'t scare the bugs away! I\'m tracking rare specimens!"' },
  { type: 'trainer', label: 'Minqiang', trainerName: 'Minqiang', description: '"I\'m gathering herbs to make medicine for my grandmother."' },
  { type: 'route', label: 'Color Ruins (Yellow)', routeKeys: ['Color Ruins Yellow 1F', 'Color Ruins Yellow B1F'], description: 'The first Color Ruins, accessible from Kimyang Road.' },
  { type: 'rival', label: 'Log - Cho Village Rematch', rivalLocation: '2nd', description: 'Log heals your party and challenges you to a rematch before building a bridge to the Red Ruins.' },
  { type: 'route', label: 'Linking Tunnel', routeKeys: ['Linking Tunnel'], description: 'A tunnel north of Pulp Byroad connecting to Tiyu Forest.' },
  { type: 'route', label: 'Tiyu Forest', routeKeys: ['Tiyu Forest'], description: 'A dense forest with bug catchers. Contains the entrance to Color Ruins (Green).' },
  { type: 'trainer', label: 'Shi', trainerName: 'Shi', description: '"I know all about Bug-type Pokemon. People call me the Bug-type guru!"' },
  { type: 'trainer', label: 'Ping', trainerName: 'Ping', description: '"Ha! I\'ve ensnared a Trainer!"' },
  { type: 'trainer', label: 'Chuntao', trainerName: 'Chuntao', description: '"Huh? A battle? But I\'m trying to weave a dress!"' },
  { type: 'trainer', label: 'Daiyu', trainerName: 'Daiyu', description: '"I\'m collecting mushrooms to bring back to Cho Village."' },
  { type: 'trainer', label: 'Peipei', trainerName: 'Peipei', description: '"My back is killing me from collecting firewood. Battle me!"' },
  { type: 'route', label: 'Color Ruins (Green)', routeKeys: ['Color Ruins Green 1F'], description: 'Second Color Ruins, accessible from Tiyu Forest.' },
  { type: 'route', label: 'Color Ruins (Red)', routeKeys: ['Color Ruins Red 1F', 'Color Ruins Red B1F'], description: 'Third Color Ruins, now accessible thanks to the bridge Log built.' },
  { type: 'route', label: 'Zhaoun Path', routeKeys: ['Zhaoun Path'], description: 'South of Linking Tunnel. Wild Pokemon jump out from the puddles.' },
  { type: 'trainer', label: 'Pengfei', trainerName: 'Pengfei', description: '"I can\'t find any wild Pokemon... That really bugs me!"' },
  { type: 'trainer', label: 'Yao', trainerName: 'Yao', description: '"Hey, stop there! I\'m going to beat you!"' },
  { type: 'trainer', label: 'Bowen', trainerName: 'Bowen', description: '"Rain like this makes me crave hot soup dumplings."' },
  { type: 'trainer', label: 'Meiling', trainerName: 'Meiling', description: '"The patterns carved into these ruins... I must capture them in fabric!"' },
  { type: 'trainer', label: 'Haoran', trainerName: 'Haoran', description: '"I\'ve got a line in this puddle and something\'s biting! ...False alarm."' },
  { type: 'route', label: 'Color Ruins (Blue)', routeKeys: ['Color Ruins Blue 1F'], description: 'The final Color Ruins. Fall through the floor to discover Dark City!' },

  // ── Act III: The Relic Crown ──
  { type: 'chapter', label: 'Act III: The Relic Crown', description: 'Win the Dark Tourney and conquer the Dark Ruins to claim the legendary Relic Crown.' },
  { type: 'route', label: 'Dark City Entrance', routeKeys: ['Dark City Entrance'], description: 'Meet Arum, who explains the history of this underground city.' },
  { type: 'trainer', label: 'Lu', trainerName: 'Lu', description: '"Spirits, be gone!"' },
  { type: 'trainer', label: 'Rue', trainerName: 'Rue', description: '"Yes... I can see it! My victory over you!"' },
  { type: 'trainer', label: 'Guowei', trainerName: 'Guowei', description: '"Let us engage in combat, young one!"' },
  { type: 'landmark', label: 'Dark City', description: 'An underground civilization with hot springs, shops, and the Dark Tourney arena.' },
  { type: 'landmark', label: 'Dark Tourney', description: 'A 16-trainer 3v3 singles bracket. Win to earn the right to challenge the Dark Ruins.' },
  { type: 'trainer', label: 'Qingchang', trainerName: 'Qingchang', description: '"This is my first Dark Tourney! I\'m going to give it my all!"' },
  { type: 'trainer', label: 'Lingfeng', trainerName: 'Lingfeng', description: '"I\'ve trained my body and mind for this moment."' },
  { type: 'trainer', label: 'Yuxuan', trainerName: 'Yuxuan', description: '"The spirits whisper your defeat to me..."' },
  { type: 'boss', label: 'Wolfsbane', bossName: 'Wolfsbane', description: "Arum's son and 3-time defending champion of the Dark Tourney." },
  { type: 'landmark', label: 'Dark Ruins', description: 'Four puzzle rooms created by Arum.' },
  { type: 'trainer', label: 'Huizhong', trainerName: 'Huizhong', description: '"My Diglett and I have dug through every tunnel in Dark City!"' },
  { type: 'trainer', label: 'Baozhai', trainerName: 'Baozhai', description: '"My bells will ring in victory!"' },
  { type: 'boss', label: 'Arum', bossName: 'Arum', bossLocation: 'Dark Ruins Final Room', description: 'Face Arum after solving all four puzzles to claim the Relic Crown.' },

  // ── Act IV: Onward to Honzhu ──
  { type: 'chapter', label: 'Act IV: Onward to Honzhu', description: 'With the Relic Crown in hand, Pulp can finally afford to move to Honzhu City.' },
  { type: 'landmark', label: 'Xilong Walk', description: 'A route north of Farmer Field. Arum bids farewell here after bringing Pulp back to the surface.' },
  { type: 'trainer', label: 'Xiao', trainerName: 'Xiao', description: '"Huh? Where did you come from? Whatever, let me test you!"' },
  { type: 'trainer', label: 'Hai', trainerName: 'Hai', description: '"I salt and dry the fish I catch out here. Lasts all winter."' },
  { type: 'trainer', label: 'Mei', trainerName: 'Mei', description: '"Don\'t step on those! Those are medicinal herbs."' },
  { type: 'trainer', label: 'Bo', trainerName: 'Bo', description: '"I smear tree sap on bark to attract bugs at night. Don\'t step on my traps!"' },
  { type: 'trainer', label: 'Shan', trainerName: 'Shan', description: '"Heading to a construction job up north. My Machop carries the heavy loads."' },
  { type: 'trainer', label: 'Yue', trainerName: 'Yue', description: '"I\'m heading north to find work. One last battle before I go!"' },
  { type: 'boss', label: 'Oracle', bossName: 'Oracle', bossLocation: 'Oracle Hill Cave', description: 'The Oracle challenges you to a farewell battle after seeing the Relic Crown.' },
  { type: 'rival', label: 'Log - Final Battle', rivalLocation: 'Final', description: 'A farewell battle with Log before departing for Honzhu City.' },
  { type: 'landmark', label: 'Honzhu City', description: 'The bustling metropolis Pulp has always dreamed of reaching.' },
];
