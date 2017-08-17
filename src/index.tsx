import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './rxjs';
import store from './createStore';
import { ContainerApp } from './components/app/ContainerApp';
import { changeLanguage } from './actions/changeLanguage';
import { showDetail } from './actions/showDetail';
import { changeView } from './actions/changeView';
import { View } from './types/AppState';

import './styles/_global.css';

ReactDOM.render(
  (
    <Provider store={store}>
      <ContainerApp />
    </Provider>
  ),
  document.getElementById('root') as HTMLElement,
  () => {
    store.dispatch(changeLanguage('en'));

    // @todo: remove for prod
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();

      if (state.list.length > 0 && Object.keys(state.details).length > 0) {
        unsubscribe();

        store.dispatch(showDetail('str_replace'));
        store.dispatch(changeView(View.Examples));
      }
    });
  }
);
registerServiceWorker();
