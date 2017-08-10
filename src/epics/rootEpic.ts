import { combineEpics } from 'redux-observable';
import changeLanguage from './changeLanguage';
import changeAutocompleteVisible from './changeAutocompleteVisible';

export default combineEpics<any>(
  changeLanguage,
  changeAutocompleteVisible,
);
