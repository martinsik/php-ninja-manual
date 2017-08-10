import { Action } from 'redux';

export const SHOW_DETAIL = 'SHOW_DETAIL';

export interface ShowDetailAction extends Action {
  name: string;
}

export function showDetail(name: string): ShowDetailAction {
  return {
    type: SHOW_DETAIL,
    name,
  };
}
