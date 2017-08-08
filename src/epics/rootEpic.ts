import { combineEpics } from 'redux-observable';
import changeLanguage from './changeLanguage';

export default combineEpics<any>(
  changeLanguage,
);
