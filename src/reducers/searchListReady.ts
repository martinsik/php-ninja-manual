import { SearchListReady, SEARCH_LIST_READY } from '../actions/searchListReady';

export default (state: string[] = [], action: SearchListReady) => {
  switch (action.type) {
    case SEARCH_LIST_READY:
      return action.list;
    default:
      return state;
  }
};
