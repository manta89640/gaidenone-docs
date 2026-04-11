import { useState } from 'react';
import { pokemonSpriteUrl } from '../lib/pokemon-dex';

interface PokemonSpriteProps {
  name: string;
  className?: string;
}

export default function PokemonSprite({ name, className = 'pokemon-thumb' }: PokemonSpriteProps) {
  const src = pokemonSpriteUrl(name);
  const [hidden, setHidden] = useState(false);

  if (!src || hidden) return null;

  return (
    <img
      src={src}
      alt={name}
      className={className}
      loading="lazy"
      onError={() => setHidden(true)}
    />
  );
}
