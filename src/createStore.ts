import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { AppState } from './types/AppState';
import defaultApp from './reducers/rootReducer';
import rootEpic from './epics/rootEpic';

const epicMiddleware = createEpicMiddleware(rootEpic);

let store = createStore<AppState>(defaultApp, applyMiddleware(epicMiddleware));

export default store;