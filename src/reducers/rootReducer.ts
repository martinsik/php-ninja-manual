import { Action, combineReducers } from 'redux';
import { AppState } from '../types/AppState';
import searchListReady from './searchListReady';
import changeSearchTerm from './changeSearchTerm';
import autocompleteVisible from './autocompleteVisible';
import changeLanguage from './changeLanguage';
import listDetailsLoaded from './listDetailsLoaded';
import showDetail from './showDetail';
import toggleParameter from './toggleParameter';
import hoverParameter from './hoverParameter';

const simpleReducers = combineReducers({
  list: searchListReady,
  searchTerm: changeSearchTerm,
  language: changeLanguage,
  details: listDetailsLoaded,
  selectedItem: combineReducers({
    name: (val = '') => val,
    expandedParams: toggleParameter,
    hoveredParam: hoverParameter,
  }),
  autocompleteVisible: (val = false) => val
});

const sliceReducers = [
  autocompleteVisible,
  showDetail,
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
