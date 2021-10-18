import axios from 'axios';
import { pokemonListType, pokemonType } from '../utils/types';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
const getPokemonData = async (name:string) => {
  const response = await api.get<pokemonType>(`pokemon/${name}`);
  return response.data;
};
const getPokemonList = async (limit = 10, offset = 0) => {
  const response = await api.get<pokemonListType>(`pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
};

const getPokemonDataById = async (id: number) => {
  const response = await api.get<pokemonType>(`pokemon/${id}`);
  return response;
};

export { getPokemonData, getPokemonList, getPokemonDataById };

export default api;
