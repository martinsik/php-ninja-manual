import { combineEpics } from 'redux-observable';
import changeLanguage from './changeLanguage';
// import { SearchListReady } from '../actions/searchListReady';
// import { ChangeLanguage } from '../actions/changeLanguage';

// type allowedActions = SearchListReady | ChangeLanguage;

export default combineEpics(
  changeLanguage,
);