import { useState, useEffect } from 'react';
import { pokemonSpriteUrl } from '../lib/pokemon-dex';

interface PokemonSpriteProps {
  name: string;
  className?: string;
}

const POKEAPI_NAME_OVERRIDES: Record<string, string> = {
  'Farfetch D': 'farfetchd',
  'Mr. Mime': 'mr-mime',
  'Mime Jr.': 'mime-jr',
  'Type: Null': 'type-null',
  'Jangmo-o': 'jangmo-o',
  'Hakamo-o': 'hakamo-o',
  'Kommo-o': 'kommo-o',
  'Tapu Koko': 'tapu-koko',
  'Tapu Lele': 'tapu-lele',
  'Tapu Bulu': 'tapu-bulu',
  'Tapu Fini': 'tapu-fini',
  'Nidoran F': 'nidoran-f',
  'Nidoran M': 'nidoran-m',
};

function normalizePokeApiName(name: string) {
  if (POKEAPI_NAME_OVERRIDES[name]) return POKEAPI_NAME_OVERRIDES[name];
  return name
    .toLowerCase()
    .replace(/♀/g, '-f')
    .replace(/♂/g, '-m')
    .replace(/['.]/g, '')
    .replace(/\s+/g, '-')
    .replace(/:/g, '')
    .replace(/é/g, 'e');
}

export default function PokemonSprite({ name, className = 'pokemon-thumb' }: PokemonSpriteProps) {
  const localSrc = pokemonSpriteUrl(name);
  const [remoteSrc, setRemoteSrc] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (localSrc || hidden) return;

    let cancelled = false;
    const apiName = normalizePokeApiName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${apiName}`)
      .then((res) => {
        if (!res.ok) throw new Error(`PokeAPI lookup failed for ${apiName}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const sprite = data?.sprites?.front_default || data?.sprites?.other?.['official-artwork']?.front_default || null;
        if (sprite) setRemoteSrc(sprite);
      })
      .catch(() => {
        if (!cancelled) setRemoteSrc(null);
      });

    return () => {
      cancelled = true;
    };
  }, [localSrc, name, hidden]);

  const src = localSrc || remoteSrc;
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
