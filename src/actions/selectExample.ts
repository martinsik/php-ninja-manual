import { Action } from 'redux';

export const SELECT_EXAMPLE = 'SELECT_EXAMPLE';

export interface SelectExample extends Action {
  index: number;
}

export function selectExample(index: number): SelectExample {
  return {
    type: SELECT_EXAMPLE,
    index,
  };
}
