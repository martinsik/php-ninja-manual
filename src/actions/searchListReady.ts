import { Action } from 'redux';

export const SEARCH_LIST_READY = 'SEARCH_LIST_READY';

export interface SearchListReadyAction extends Action {
  list: string[];
}

export function searchListReady(list: string[]): SearchListReadyAction {
  return {
    type: SEARCH_LIST_READY,
    list,
  };
}
