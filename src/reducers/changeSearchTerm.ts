import { ChangeSearchTermAction, CHANGE_SEARCH_TERM } from '../actions/changeSearchTerm';

export default (state: string = '', action: ChangeSearchTermAction) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return action.term.trim();
    default:
      return state;
  }
};
