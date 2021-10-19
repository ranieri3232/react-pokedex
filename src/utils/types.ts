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
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    }
    // eslint-disable-next-line camelcase
    is_hidden: boolean;
    slot: number;
  }>;
  stats: Array<{
    // eslint-disable-next-line camelcase
    base_stat: number;
    effort: number;
    stat:{
      name: string;
      url: string;
    }
  }>;
  weight: number;
  sprites:{
    other:{
      'official-artwork':{
        'front_default': string;
      }
    }
  }

}
