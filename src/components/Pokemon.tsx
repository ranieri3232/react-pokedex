import { pokemonType } from "../utils/types";
type PokemonProps = {
  pokemon: pokemonType;
}
export function Pokemon({pokemon}:PokemonProps){

  return (
    <div className="card">
      <strong>{pokemon.name}</strong>
      <img src={`../images/animated/${pokemon.name}.gif`} alt="" />
    </div>
  );
}