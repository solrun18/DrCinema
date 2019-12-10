import * as constants from '../constants';
import MovieService from '../services/MovieService';

export const getCinemas = () => {
    return async dispatch => {
        try {
            const currentDegree = await MovieService.getCinemas();
            dispatch(getCinemasSuccess(getCinemas));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}
export const getCinemasSuccess = string => ({
  type: constants.GET_CINEMAS,
  payload: string,
});

export const getCinemaDetails = string => ({
  type: constants.GET_CINEMA_DETAILS,
  payload: string,
});
