/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Loading } from '../../components/Loading';
import { getPokemonData } from '../../services/api';
import { pokemonType } from '../../utils/types';
import { ReactComponent as ArrowSvg } from '../../assets/arrow.svg';
import './styles.scss';
import { PokemonTypeIndicator } from '../../components/PokemonTypeIndicator';
import { captalizeFirstLetter, pokemonIdFormater } from '../../utils/utils';
import { ProgressBar } from '../../components/ProgressBar';

type DetailsParams = {
  id: string
}
export function Details() {
  const params = useParams<DetailsParams>();
  const [pokemon, setPokemon] = useState<pokemonType>();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { id } = params;

  function handleBackToHome() {
    if (pokemon) {
      history.goBack();
    }
  }
  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await getPokemonData(id);
      setLoading(false);
      setPokemon(data);
    })();
  }, []);
  return (
    <div className="details-page">
      <div className="header">
        <button type="button" onClick={handleBackToHome}>
          <ArrowSvg />
        </button>
        <h1>{captalizeFirstLetter(pokemon?.name || ' ')}</h1>
      </div>
      {
        loading
          ? <Loading />
          : pokemon && (
            <div className="content">
              <div className="pokemon-atributtes">
                <h2>Atributes</h2>
                <div className="row">
                  <strong>ID</strong>
                  <span>{`#${pokemonIdFormater(pokemon.id)}`}</span>
                </div>
                <div className="row">
                  <strong>Weight</strong>
                  <span>{pokemon.weight}</span>
                </div>
                <div className="row">
                  <strong>Height</strong>
                  <span>{pokemon.height}</span>
                </div>
                <div className="row">
                  <strong>Abilites</strong>
                  <div className="abilites">
                    {pokemon.abilities.map((ability) => (
                      <span key={ability.ability.name} className={`${pokemon.types[0].type.name}`}>
                        {ability.ability.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row">
                  <strong>Types</strong>
                  {pokemon ? <PokemonTypeIndicator types={pokemon.types} /> : ''}
                </div>

              </div>
              <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={`${pokemon?.name} pokemon sprite`} />
              <div className="pokemon-stats">
                <h2>Stats</h2>
                {pokemon.stats.map(({ stat, base_stat }) => (
                  <div key={stat.name} className="row">
                    <strong>{stat.name}</strong>
                    <ProgressBar now={base_stat} max={200} />
                  </div>
                ))}
              </div>
            </div>
          )
      }
    </div>
  );
}
