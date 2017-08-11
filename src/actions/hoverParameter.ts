import { Action } from 'redux';

export const HOVER_PARAMETER = 'HOVER_PARAMETER';

export interface HoverParameterAction extends Action {
  name: string|null;
}

export function hoverParameter(name: string|null): HoverParameterAction {
  return {
    type: HOVER_PARAMETER,
    name,
  };
}
