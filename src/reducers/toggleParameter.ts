import { ToggleParameterAction, TOGGLE_PARAMETER } from '../actions/toggleParameter';

export default (state: string[] = [], action: ToggleParameterAction) => {
  switch (action.type) {
    case TOGGLE_PARAMETER:
      const pos = state.indexOf(action.name);
      if (pos === -1) {
        state.push(action.name);
      } else {
        state.splice(pos, 1);
      }
      return Array.from(state);

    default:
      return state;
  }
};
