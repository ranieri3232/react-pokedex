import React from 'react';
import { Pokemon } from '../../components/Pokemon';
import { useFavorites } from '../../hooks/useFavorites';
import './styles.scss';

export function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div id="favorites-page">
      <h1>Favorites</h1>
      <div className="card-list">
        {
          favorites.length !== 0
            ? favorites.map((pkm) => <Pokemon key={pkm.id} pokemon={pkm} />)
            : (
              <div className="no-results">
                <h2>No favorites found</h2>
                <span>please give a heart to your favorites pokémon</span>
              </div>
            )
        }
      </div>
    </div>
  );
}
