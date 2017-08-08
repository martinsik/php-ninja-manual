import { Action } from 'redux';

export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';

export interface ChangeSearchTermAction extends Action {
  term: string;
}

export function changeSearchTerm(term: string): ChangeSearchTermAction {
  return {
    type: CHANGE_SEARCH_TERM,
    term,
  };
}
