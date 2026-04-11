export function typeClass(type: string): string {
  return 'type-' + (type || '').toLowerCase().replace(/[^a-z]/g, '');
}

export function rarityClass(rate: number): string {
  if (rate >= 20) return 'common';
  if (rate >= 10) return 'uncommon';
  if (rate >= 4) return 'rare';
  return 'ultrarare';
}

export function rarityLabel(rate: number): string {
  if (rate >= 20) return 'Common';
  if (rate >= 10) return 'Uncommon';
  if (rate >= 4) return 'Rare';
  return 'Ultra-Rare';
}

export const TYPE_EMOJIS: Record<string, string> = {
  Rock: '🪨',
  Dragon: '🐉',
  Steel: '⚙️',
  Fire: '🔥',
  Water: '💧',
  Grass: '🌿',
  Normal: '⭐',
  Psychic: '🔮',
  Ground: '🏜️',
  Ice: '❄️',
  Electric: '⚡',
  Fighting: '👊',
  Flying: '🕊️',
  Poison: '☠️',
  Bug: '🐛',
  Ghost: '👻',
  Dark: '🌙',
};
