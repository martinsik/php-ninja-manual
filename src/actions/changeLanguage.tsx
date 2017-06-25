import { Action } from 'redux';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export interface ChangeLanguage extends Action {
  language: string;
}

export function changeLanguage(language: string) {
  return {
    type: CHANGE_LANGUAGE,
    language,
  } as ChangeLanguage;
}
