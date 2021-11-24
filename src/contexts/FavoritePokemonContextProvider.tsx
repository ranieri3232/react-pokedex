import React, { createContext, ReactNode } from 'react';
import usePersistedFavorite from '../utils/usePersistedFavorite';

type FavoritePokemonContextProps = {
  updateFavoritePokemon: (pokemonId:number) => void;
  favorites: number[];
}
type FavoritePokemonContextProviderProps = {
  children: ReactNode;
}
export const FavoritePokemonContext = createContext({} as FavoritePokemonContextProps);
export function FavoritePokemonContextProvider({ children }: FavoritePokemonContextProviderProps) {
  const [favorites, setFavorites] = usePersistedFavorite('pkmFavorites', []);

  function updateFavoritePokemon(pokemonId: number) {
    const data = favorites.find((id) => id === pokemonId);
    if (data) {
      setFavorites(favorites.filter((id) => id !== pokemonId));
    } else {
      setFavorites((state) => [...state, pokemonId]);
    }
  }
  return (
    <FavoritePokemonContext.Provider value={{ updateFavoritePokemon, favorites }}>
      {children}
    </FavoritePokemonContext.Provider>
  );
}
