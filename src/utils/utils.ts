export function pokemonIdFormater(id: number) {
  const code = (`0000${id}`).slice(-4);
  return code;
}

export function range(start: number, end: number) {
  const arr:Array<number> = [];
  for (let i = start; i <= end; i += 1) {
    arr.push(i);
  }
  return arr;
}

export const genIndex = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
];
