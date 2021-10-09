import {useEffect, useState} from 'react';
import { Pokemon } from '../components/Pokemon';
import {getPokemonData, getPokemonList} from '../services/api';
import { pokemonType } from '../utils/types';
export function Home(){
  const [page, setPage] = useState(0);
  const [pokemon, setPokemon] = useState<pokemonType[]>([]);
  useEffect(() => {
    (async () => {
      const pokemonList = await getPokemonList(30, page *30);
      console.log(pokemonList);
      const promisses = pokemonList.results.map(pokemon => {
        return getPokemonData(pokemon.name);
      });
      const data = await Promise.all(promisses);
      setPokemon(data);
    })()
  },[page]);
  useEffect(() => {
    console.log(pokemon);
  },[pokemon]);
  return(
    <div id="pokedex-page">
      <h1>Home</h1>
      <div className="card-list">
        {pokemon.map(pkm => 
          <Pokemon key={pkm.id} pokemon={pkm}/>
        )}
      </div>
    </div>
  );
}