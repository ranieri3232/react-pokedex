import axios from 'axios';
import { pokemonListType, pokemonType } from '../utils/types';



const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});
const getPokemonData = async (name:string) => {
  const response = await api.get<pokemonType>(`pokemon/${name}`);
  return response.data;
} 
const getPokemonList = async (limit:number = 10, offset:number = 0) => {
  const response = await api.get<pokemonListType>(`pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
}

export {getPokemonData, getPokemonList};

export default api;