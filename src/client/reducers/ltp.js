import { LTP } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case LTP:
            var data = action.payload;
            return {data};
        default:
            return state;
    }
};