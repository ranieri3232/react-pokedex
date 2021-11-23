import axios from 'axios';
import { generationType, pokemonListType, pokemonType } from '../utils/types';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
const getPokemonData = async (name:string) => {
  const { data } = await api.get<pokemonType>(`pokemon/${name}`);
  return data;
};
const getPokemonDataByUrl = async (url: string) => {
  const num = url.split('/').length;
  const { data } = await api.get<pokemonType>(`pokemon/${url.split('/')[num - 2]}`);
  return data;
};
const getPokemonList = async (limit = 10, offset = 0) => {
  const { data } = await api.get<pokemonListType>(`pokemon?limit=${limit}&offset=${offset}`);
  return data;
};

const getPokemonDataById = async (id: number) => {
  const { data } = await api.get<pokemonType>(`pokemon/${id}`);
  return data;
};

const getPokemonByGeneration = async (gen: number) => {
  const { data } = await api.get<generationType>(`generation/${gen}`);
  const promisses = data.pokemon_species.map((pkm) => getPokemonDataByUrl(pkm.url));
  const pokemon = await Promise.all(promisses);
  return {
    pokemon: pokemon.sort((a, b) => a.id - b.id),
    name: data.name,
    id: data.id,
  };
};

export {
  getPokemonData, getPokemonList, getPokemonDataById, getPokemonByGeneration,
};

export default api;
