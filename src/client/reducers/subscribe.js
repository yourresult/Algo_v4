import { SUBSCRIBE } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SUBSCRIBE:
        return action.payload || false;
    default:
      return state;
  }
};