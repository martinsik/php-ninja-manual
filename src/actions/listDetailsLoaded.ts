import { Action } from 'redux';
import { Detail } from '../types/Detail';

export const LIST_DETAILS_LOADED = 'LIST_DETAILS_LOADED';

export interface ListDetailsLoadedAction extends Action {
  details: { [key: string]: Detail };
}

export function listDetailsLoaded(details: { [key: string]: Detail }): ListDetailsLoadedAction {
  return {
    type: LIST_DETAILS_LOADED,
    details,
  };
}
