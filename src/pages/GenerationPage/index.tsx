import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Loading } from '../../components/Loading';
import { Pokemon } from '../../components/Pokemon';
import { getPokemonByGeneration } from '../../services/api';
import { generationDataTypes } from '../../utils/types';
import { genIndex } from '../../utils/utils';
import './styles.scss';

export function GenerationPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<generationDataTypes>({} as generationDataTypes);
  const { gen } = useParams() as { gen: string };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getPokemonByGeneration(+gen);
      setData(result);
      setLoading(false);
    })();
  }, []);
  return (
    <div id="generation-page">

      {
      loading
        ? <Loading />
        : (
          <>
            <h2>{`Generation ${genIndex[data.id - 1]}`}</h2>
            <div className="card-list">
              {data.pokemon.map((pkm) => (
                <Pokemon key={pkm.id} pokemon={pkm} />
              ))}
            </div>
          </>
        )
}
    </div>
  );
}
