import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { changeAutocompleteVisible, AutocompleteVisibleChangeAction } from '../actions/changeAutocompleteVisible';
import {
  ScheduledAutocompleteVisibleChangeAction,
  SCHEDULE_CHANGE_AUTOCOMPLETE_VISIBLE } from '../actions/scheduleChangeAutocompleteVisible';

type ActionType = ActionsObservable<ScheduledAutocompleteVisibleChangeAction>;
type ReturnType = Observable<AutocompleteVisibleChangeAction>;

export default (action$: ActionType): ReturnType =>
  action$.ofType(SCHEDULE_CHANGE_AUTOCOMPLETE_VISIBLE)
    .delay(150)
    .map(action => changeAutocompleteVisible(action.visible));
