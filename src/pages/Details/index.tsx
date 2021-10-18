import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Loading } from '../../components/Loading';
import { getPokemonData } from '../../services/api';
import { pokemonType } from '../../utils/types';
import './styles.scss';

type DetailsParams = {
  id: string
}
export function Details() {
  const params = useParams<DetailsParams>();
  const [pokemon, setPokemon] = useState<pokemonType>();
  const [loading, setLoading] = useState(true);
  const { id } = params;
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
      {
        loading
          ? <Loading />
          : <div className="content"><h1>{pokemon?.name}</h1></div>
      }
    </div>
  );
}
