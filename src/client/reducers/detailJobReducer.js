import { DETAIL_JOBS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case DETAIL_JOBS:
        return action.payload.data || false;
    default:
      return state;
  }
};