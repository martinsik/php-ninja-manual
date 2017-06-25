import { ActionsObservable } from 'redux-observable';
import { CHANGE_LANGUAGE, ChangeLanguage } from '../actions/changeLanguage';
import { searchListReady, SearchListReady } from '../actions/searchListReady';
import { ajax } from 'rxjs/observable/dom/ajax';

export default (action$: ActionsObservable<{}>) =>
  action$.ofType(CHANGE_LANGUAGE)
    .mergeMap<ChangeLanguage, string[]>(action => ajax.getJSON(`json/${action.language}_php_net.list.json`))
    .map<string[], SearchListReady>(responseList => searchListReady(responseList));
