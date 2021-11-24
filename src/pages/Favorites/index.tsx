import React, { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import { Pokemon } from '../../components/Pokemon';
import { useFavorites } from '../../hooks/useFavorites';
import { getPokemonlistById } from '../../services/api';
import { pokemonType } from '../../utils/types';
import './styles.scss';

export function Favorites() {
  const { favorites } = useFavorites();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<pokemonType[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getPokemonlistById(favorites);
      setPokemon(data);
      setLoading(false);
    })();
  },
  [favorites]);

  const render = () => {
    if (loading) return <Loading />;
    if (pokemon.length !== 0) return pokemon.map((pkm) => <Pokemon key={pkm.id} pokemon={pkm} />);
    return (
      <div className="no-results">
        <h2>No favorites found</h2>
        <span>please give a heart to your favorites pokémon</span>
      </div>
    );
  };

  return (
    <div id="favorites-page">
      <h2>Favorites</h2>
      <div className="card-list">
        {
          render()
        }
      </div>
    </div>
  );
}
