import { HoverParameterAction, HOVER_PARAMETER } from '../actions/hoverParameter';

export default (state: string|null = null, action: HoverParameterAction) => {
  switch (action.type) {
    case HOVER_PARAMETER:
      return action.name;
    default:
      return state;
  }
};
