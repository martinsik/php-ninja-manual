import { Action } from 'redux';

export const SEARCH_LIST_READY = 'SEARCH_LIST_READY';

export interface SearchListReady extends Action {
  list: string[];
}

export function searchListReady(list: string[]) {
  return {
    type: SEARCH_LIST_READY,
    list,
  } as SearchListReady;
}
