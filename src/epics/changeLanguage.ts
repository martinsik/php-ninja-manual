import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { CHANGE_LANGUAGE, ChangeLanguage } from '../actions/changeLanguage';
import { searchListReady, SearchListReady } from '../actions/searchListReady';

export default (action$: ActionsObservable<ChangeLanguage>): Observable<SearchListReady> =>
  action$.ofType(CHANGE_LANGUAGE)
    .mergeMap(action => ajax.getJSON(`json/${action.language}_php_net.list.json`))
    .map((responseList: string[]) => searchListReady(responseList));
