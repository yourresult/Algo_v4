import { ORDER } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case ORDER:
        return action.payload.data || false;
    default:
      return state;
  }
};