import { ShowDetailAction, SHOW_DETAIL } from '../actions/showDetail';

export default (state: string = '', action: ShowDetailAction) => {
  switch (action.type) {
    case SHOW_DETAIL:
      return action.name;
    default:
      return state;
  }
};
