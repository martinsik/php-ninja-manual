import { ToggleExpandDescriptionAction, TOGGLE_EXPAND_DESCRIPTION } from '../actions/toggleExpandDescription';

export default (state: boolean = false, action: ToggleExpandDescriptionAction) => {
  switch (action.type) {
    case TOGGLE_EXPAND_DESCRIPTION:
      return !state;
    default:
      return state;
  }
};
