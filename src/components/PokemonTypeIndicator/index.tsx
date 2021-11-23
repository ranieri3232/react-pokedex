import React from 'react';
import './styles.scss';

type PokemonTypesProps = {
  types: Array<{
    slot:number;
    type:{
      name: string;
      url: string;
    }
  }>;
}
export function PokemonTypeIndicator({ types }: PokemonTypesProps) {
  return (
    <div className="badge-container">
      <span className={`type ${types[0].type.name}`}>{types[0].type.name}</span>
      {types.length > 1 ? <span className={`type ${types[1].type.name}`}>{types[1].type.name}</span> : ''}
    </div>
  );
}
