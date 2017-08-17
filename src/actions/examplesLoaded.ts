import { Action } from 'redux';
import { Example } from '../types/Example';

export const EXAMPLES_LOADED = 'EXAMPLES_LOADED';

export interface ExamplesLoaded extends Action {
  examples: { [key: string]: Example };
}

export function examplesLoaded(examples: { [key: string]: Example }): ExamplesLoaded {
  return {
    type: EXAMPLES_LOADED,
    examples,
  };
}
