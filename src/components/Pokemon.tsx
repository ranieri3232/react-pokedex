import { pokemonType } from "../utils/types";
type PokemonProps = {
  pokemon: pokemonType;
}
export function Pokemon({pokemon}:PokemonProps){

  return (
    <div className="card">
      <strong>{pokemon.name}</strong>
      <img src={`../images/animated/${pokemon.name}.gif`} alt={pokemon.name} />
      <div>
        <span>{pokemon.types[0].type.name}</span>
        
        {pokemon.types.length>1?<span>/{pokemon.types[1].type.name}</span>:''}
      </div>
    </div>
  );
}