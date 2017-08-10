import { Action } from 'redux';

export const SCHEDULE_CHANGE_AUTOCOMPLETE_VISIBLE = 'SCHEDULE_CHANGE_AUTOCOMPLETE_VISIBLE';

export interface ScheduledAutocompleteVisibleChangeAction extends Action {
  visible: boolean;
}

export function scheduleChangeAutocompleteVisible(visible: boolean): ScheduledAutocompleteVisibleChangeAction {
  return {
    type: SCHEDULE_CHANGE_AUTOCOMPLETE_VISIBLE,
    visible,
  };
}
