import * as constants from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case constants.GET_UPCOMING_MOVIES:
      return state + action.payload;
    default:
      return state;
  }
}
