import React, { FormEvent, useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import { Pagination } from '../../components/Pagination';
import { Pokemon } from '../../components/Pokemon';
import { getPokemonData, getPokemonList } from '../../services/api';
import { pokemonDataType, pokemonType } from '../../utils/types';
import './styles.scss';

export function Home() {
  const limit = 30;
  const [page, setPage] = useState(1);
  const [pokemonData, setPokemonData] = useState<pokemonDataType>({} as pokemonDataType);
  const [filteredPokemon, setFilteredPokemon] = useState<pokemonType[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState('');
  useEffect(() => {
    (async () => {
      const pokemonList = await getPokemonList(limit, (page - 1) * limit);
      const promisses = pokemonList.results.map((pkm) => getPokemonData(pkm.name));
      const pokemon = await Promise.all(promisses);
      const { count, next, previous } = pokemonList;
      setPokemonData({
        count, next, previous, pokemon,
      });
      setLoading(false);
    })();
  }, [page]);

  function paginate(pageNumber: number) {
    setLoading(true);
    setPage(pageNumber);
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    (async () => {
      try {
        const data = await getPokemonData(searchName);
        setFilteredPokemon([data]);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    })();
  }
  function onInputChange(pokemonName: string) {
    if (pokemonName.trim() === '') {
      setSearchName('');
      setFilteredPokemon([]);
      return;
    }
    const searchString = pokemonName.trim();
    setSearchName(searchString);
    const { pokemon } = pokemonData;
    const filtered = pokemon.filter((pkm) => pkm.name.includes(searchString));
    setFilteredPokemon(filtered);
  }
  return (
    <div id="pokedex-page">
      <div className="search-input">
        <span>Name:</span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="search pokemon by name"
            onChange={(e) => onInputChange(e.target.value)}
          />
        </form>
      </div>

      <Pagination
        page={page}
        // eslint-disable-next-line react/jsx-no-bind
        paginate={paginate}
        totalItens={pokemonData.count}
        limit={limit}
      />

      <div className="card-list">
        {
          // eslint-disable-next-line no-nested-ternary
          searchName !== ''
            ? (
              filteredPokemon?.length === 0
                ? (
                  <div className="no-results">
                    <h1>No results found</h1>
                    <span>Press Enter to find the pokémon by name</span>
                  </div>
                )
                : filteredPokemon?.map((pkm) => <Pokemon key={pkm.id} pokemon={pkm} />)
            )
            : loading
              ? <Loading />
              : (pokemonData.pokemon?.map((pkm) => <Pokemon key={pkm.id} pokemon={pkm} />))
        }
      </div>
    </div>
  );
}
