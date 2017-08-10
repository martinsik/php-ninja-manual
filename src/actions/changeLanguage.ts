import { Action } from 'redux';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export interface ChangeLanguageAction extends Action {
  language: string;
}

export function changeLanguage(language: string): ChangeLanguageAction {
  return {
    type: CHANGE_LANGUAGE,
    language,
  };
}
