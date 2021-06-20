import { SUBSCRIBE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case SUBSCRIBE:
        var dat = [...state, action.payload];
        return [...new Set(dat)];
    default:
      return state;
  }
};