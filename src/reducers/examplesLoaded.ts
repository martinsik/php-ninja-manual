import { ExamplesLoaded, EXAMPLES_LOADED } from '../actions/examplesLoaded';
import { Example } from '../types/Example';

export default (state: { [key: string]: Example[] } = {}, action: ExamplesLoaded) => {
  switch (action.type) {
    case EXAMPLES_LOADED:
      return action.examples;
    default:
      return state;
  }
};
