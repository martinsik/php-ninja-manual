import { ChangeView, CHANGE_VIEW } from '../actions/changeView';
import { View } from '../types/AppState';

export default (state: View = View.Detail, action: ChangeView) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.view;
    default:
      return state;
  }
};
