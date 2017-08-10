import { ChangeLanguageAction, CHANGE_LANGUAGE } from '../actions/changeLanguage';

export default (state: string = '', action: ChangeLanguageAction) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.language;
    default:
      return state;
  }
};
