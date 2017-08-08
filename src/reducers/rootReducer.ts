import { Action, combineReducers } from 'redux';
import searchListReady from './searchListReady';
import changeSearchTerm from './changeSearchTerm';
import autocompleteVisible from './autocompleteVisible';
import { AppState } from '../App';

const simpleReducers = combineReducers({
  list: searchListReady,
  searchTerm: changeSearchTerm,
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
