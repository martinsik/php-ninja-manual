import { Action } from 'redux';

export const TOGGLE_PARAMETER = 'TOGGLE_PARAMETER';

export interface ToggleParameterAction extends Action {
  name: string;
}

export function expandParameter(name: string): ToggleParameterAction {
  return {
    type: TOGGLE_PARAMETER,
    name,
  };
}
