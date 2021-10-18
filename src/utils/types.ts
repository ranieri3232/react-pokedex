export type pokemonListType = {
  count: number;
  next: string| null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}
export type pokemonDataType = {
  count: number;
  next: string| null;
  previous: string | null;
  pokemon: Array<pokemonType>;
}

export type pokemonType = {
  id: number;
  name: string;
  height: number;
  types: Array<{
    slot: number
    type: {
      name: string;
      url: string;
    }
  }>;
  weigth: number;
  sprites:{
    other:{
      'official-artwork':{
        'front_default': string;
      }
    }
  }

}
