
import * as constants from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case constants.GET_CINEMA_DETAILS:
      console.log('STATE ISS: ', state);
      console.log('PAYLOAD IS: ', action.payload.getDetails);
      return action.payload
    default: return state
  }
}
