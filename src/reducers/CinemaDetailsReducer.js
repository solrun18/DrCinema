
import * as constants from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case constants.GET_CINEMA_MOVIES: return action.payload;
    default: return state;
  }
}
