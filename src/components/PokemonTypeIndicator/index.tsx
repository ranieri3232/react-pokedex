import React from 'react';
import './styles.scss';

type PokemonTypesProps = {
  // eslint-disable-next-line react/require-default-props
  simpleIndicator?: boolean | undefined;
  types: Array<{
    slot:number;
    type:{
      name: string;
      url: string;
    }
  }>;
}
export function PokemonTypeIndicator({ types, simpleIndicator = false }: PokemonTypesProps) {
  if (simpleIndicator) {
    return (
      <div className="simple">
        <span className={`type-simple ${types[0].type.name}`}>{types[0].type.name}</span>
        {types.length > 1 ? <span className={`type-simple ${types[1].type.name}`}>{types[1].type.name}</span> : ''}
      </div>
    );
  }
  return (
    <div className="badge-container">
      <span className={`type ${types[0].type.name}`}>{types[0].type.name}</span>
      {types.length > 1 ? <span className={`type ${types[1].type.name}`}>{types[1].type.name}</span> : ''}
    </div>
  );
}
