import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './rxjs';
import { App } from './App';
import store from './createStore';
import { changeLanguage } from './actions/changeLanguage';

import './styles/_global.css';

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root') as HTMLElement,
  () => store.dispatch(changeLanguage('en'))
);
registerServiceWorker();
