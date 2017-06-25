import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
// import { AppState } from './states';
import defaultApp from './reducers/defaultApp';
import rootEpic from './epics/rootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic);

// const defaultState = {
//   language: 'en',
// } as AppState;

let store = createStore(defaultApp, applyMiddleware(epicMiddleware));

export default store;