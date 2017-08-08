import { Action } from 'redux';

export const CHANGE_AUTOCOMPLETE_VISIBLE = 'CHANGE_AUTOCOMPLETE_VISIBLE';

export interface AutocompleteVisibleChangeAction extends Action {
  visible: boolean;
}

export function changeAutocompleteVisible(visible: boolean): AutocompleteVisibleChangeAction {
  return {
    type: CHANGE_AUTOCOMPLETE_VISIBLE,
    visible,
  };
}
