import { Action } from 'redux';
import { View } from '../types/AppState';

export const CHANGE_VIEW = 'CHANGE_VIEW';

export interface ChangeView extends Action {
  view: View;
}

export function changeView(view: View): ChangeView {
  return {
    type: CHANGE_VIEW,
    view,
  };
}
