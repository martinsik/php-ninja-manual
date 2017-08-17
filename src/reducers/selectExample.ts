import { SelectExample, SELECT_EXAMPLE } from '../actions/selectExample';

export default (state: number = 0, action: SelectExample) => {
  switch (action.type) {
    case SELECT_EXAMPLE:
      return action.index;
    default:
      return state;
  }
};
