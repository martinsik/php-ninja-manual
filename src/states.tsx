import { Action } from 'redux';

export interface AppState extends Action {
  language: string;
}
