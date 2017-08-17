import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Detail } from '../types/Detail';
import { Example } from '../types/Example';
import { CHANGE_LANGUAGE, ChangeLanguageAction } from '../actions/changeLanguage';
import { searchListReady, SearchListReadyAction } from '../actions/searchListReady';
import { listDetailsLoaded, ListDetailsLoadedAction } from '../actions/listDetailsLoaded';
import { examplesLoaded, ExamplesLoaded } from '../actions/examplesLoaded';

type ReturnActions = SearchListReadyAction | ListDetailsLoadedAction | ExamplesLoaded;

export default (action$: ActionsObservable<ChangeLanguageAction>): Observable<ReturnActions> =>
  action$.ofType(CHANGE_LANGUAGE)
    .mergeMap(action => Observable.merge(
      ajax.getJSON(`json/${action.language}_php_net.list.json`)
        .map((list: string[]) => searchListReady(list)),

      ajax.getJSON(`json/${action.language}_php_net.json`)
        .map((details: { [key: string]: Detail }) => listDetailsLoaded(details)),

      ajax.getJSON(`json/${action.language}_php_net.examples.json`)
        .map((examples: { [key: string]: Example }) => examplesLoaded(examples)),
    ));
