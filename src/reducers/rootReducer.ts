import { Action, combineReducers } from 'redux';
import { AppState } from '../types/AppState';
import searchListReady from './searchListReady';
import changeSearchTerm from './changeSearchTerm';
import autocompleteVisible from './autocompleteVisible';
import changeLanguage from './changeLanguage';
import listDetailsLoaded from './listDetailsLoaded';
import showDetail from './showDetail';
import toggleParameter from './toggleParameter';

const simpleReducers = combineReducers({
  list: searchListReady,
  searchTerm: changeSearchTerm,
  language: changeLanguage,
  details: listDetailsLoaded,
  selectedItem: combineReducers({
    name: showDetail,
    expandedParams: toggleParameter,
  }),
  autocompleteVisible: (val = false) => val
});

const sliceReducers = [
  autocompleteVisible
];

function applySliceReducers(state: AppState, action: Action) {
  return sliceReducers.reduce((prevState, reducer) => reducer(prevState, action), state);
}

export default function (state: AppState, action: Action) {
  const newState = <AppState> simpleReducers(state, action);
  // Apply reducers that need to work with complete application state
  const finalState = applySliceReducers(newState, action);

  return finalState;
}
