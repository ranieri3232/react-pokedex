import React from 'react';
import { Link } from 'react-router-dom';
import { pokemonType } from '../../utils/types';
import { captalizeFirstLetter, pokemonIdFormater } from '../../utils/utils';
import { PokemonTypeIndicator } from '../PokemonTypeIndicator';
import { ReactComponent as HeartSvg } from '../../assets/heart-solid.svg';
import './styles.scss';
import { useFavorites } from '../../hooks/useFavorites';

type PokemonProps = {
  pokemon: pokemonType;
}
const baseURL = 'https://github.com/ranieri3232/pokemon-sprites/blob/master/';
export function Pokemon({ pokemon }:PokemonProps) {
  const { favorites, updateFavoritePokemon } = useFavorites();

  function handleButtonClick(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    updateFavoritePokemon(pokemon.id);
  }
  return (
    <Link to={`/details/${pokemon.id}`}>
      <div
        className="card"
      >
        <div className="card-header">
          <strong>{captalizeFirstLetter(pokemon.name)}</strong>
          <span className={pokemon.types[0].type.name}>
            #
            {pokemonIdFormater(pokemon.id)}
          </span>
        </div>

        <img src={`${baseURL}${pokemon.name}.gif?raw=true`} alt={pokemon.name} />
        <PokemonTypeIndicator types={pokemon.types} />
        <button onClick={(e) => handleButtonClick(e)} type="button">
          <HeartSvg
            className={favorites.find((id) => id === pokemon.id) ? 'favorite' : ''}
          />
        </button>

      </div>
    </Link>
  );
}
