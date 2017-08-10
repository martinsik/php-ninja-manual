import { Action } from 'redux';
import { AutocompleteVisibleChangeAction, CHANGE_AUTOCOMPLETE_VISIBLE } from '../actions/changeAutocompleteVisible';
import { ChangeSearchTermAction, CHANGE_SEARCH_TERM } from '../actions/changeSearchTerm';
import { AppState } from '../types/AppState';

export default (state: AppState, action: Action) => {
  if ([CHANGE_AUTOCOMPLETE_VISIBLE, CHANGE_SEARCH_TERM].indexOf(action.type) === -1) {
    return state;
  }

  let autocompleteVisible = state.autocompleteVisible;

  switch (action.type) {
    case CHANGE_AUTOCOMPLETE_VISIBLE:
      autocompleteVisible = (action as AutocompleteVisibleChangeAction).visible;
      if (state.searchTerm.length === 0) {
        autocompleteVisible = false;
      }
      break;

    case CHANGE_SEARCH_TERM:
      const term = (action as ChangeSearchTermAction).term;
      autocompleteVisible = term.length > 0;
      break;

    default:
      break;
  }

  return Object.assign({}, state, {autocompleteVisible});
};
