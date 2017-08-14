import { Action } from 'redux';

export const TOGGLE_EXPAND_DESCRIPTION = 'TOGGLE_EXPAND_DESCRIPTION';

export interface ToggleExpandDescriptionAction extends Action {
}

export function toggleExpandDescription(): ToggleExpandDescriptionAction {
  return {
    type: TOGGLE_EXPAND_DESCRIPTION,
  };
}
