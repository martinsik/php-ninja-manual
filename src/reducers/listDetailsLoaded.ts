import { ListDetailsLoadedAction, LIST_DETAILS_LOADED } from '../actions/listDetailsLoaded';
import { Detail } from '../types/Detail';

export default (state: { [key: string]: Detail } = {}, action: ListDetailsLoadedAction) => {
  switch (action.type) {
    case LIST_DETAILS_LOADED:
      return action.details;
    default:
      return state;
  }
};
