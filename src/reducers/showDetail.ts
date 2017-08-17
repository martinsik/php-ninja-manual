import { AppState } from '../types/AppState';
import { ShowDetailAction, SHOW_DETAIL } from '../actions/showDetail';

export default (state: AppState, action: ShowDetailAction) => {
  switch (action.type) {
    case SHOW_DETAIL:
      const stateSlice = {
        searchTerm: action.name,
        selectedItem: {
          name: action.name,
          expandedParams: [],
          expandedDescription: false,
        },
        selectedExample: 0,
      };
      return Object.assign({}, state, stateSlice);

    default:
      return state;
  }
};
