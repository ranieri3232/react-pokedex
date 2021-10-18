import { useContext } from 'react';
import { FavoritePokemonContext } from '../contexts/FavoritePokemonContextProvider';

export function useFavorites() {
  const value = useContext(FavoritePokemonContext);
  return value;
}
