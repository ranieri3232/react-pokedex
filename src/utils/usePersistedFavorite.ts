/* eslint-disable rest-spread-spacing */
import {
  useEffect, useState, Dispatch, SetStateAction,
} from 'react';

type Response = [
  number[],
  Dispatch<SetStateAction<number[]>>,
];

function usePersistedFavorite(key: string, initialState:number[]): Response {
  const [state, setState] = useState(() => {
    const storagedValue = localStorage.getItem(key);
    if (storagedValue) {
      const data:number[] = JSON.parse(storagedValue);
      const unique = [... new Set(data)];
      return unique;
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedFavorite;
