import React, { createContext, ReactNode } from 'react';
import { pokemonType } from '../utils/types';
import usePersistedState from '../utils/usePersistedState';

type FavoritePokemonContextProps = {
  updateFavoritePokemon: (pokemon:pokemonType) => void;
  favorites: pokemonType[];
}
type FavoritePokemonContextProviderProps = {
  children: ReactNode;
}
export const FavoritePokemonContext = createContext({} as FavoritePokemonContextProps);
export function FavoritePokemonContextProvider({ children }: FavoritePokemonContextProviderProps) {
  const [favorites, setFavorites] = usePersistedState<pokemonType[]>('pokemonFavorites', []);

  function updateFavoritePokemon(pokemon: pokemonType) {
    const data = favorites.find((pkm) => pkm.id === pokemon.id);
    if (data) {
      setFavorites(favorites.filter((pkm) => pkm.id !== pokemon.id));
    } else {
      setFavorites((state) => [...state, pokemon]);
    }
  }
  return (
    <FavoritePokemonContext.Provider value={{ updateFavoritePokemon, favorites }}>
      {children}
    </FavoritePokemonContext.Provider>
  );
}
