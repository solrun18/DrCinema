import * as constants from '../constants';
import MovieService from '../services/MovieService';

export const getCinemas = () => {
    return async dispatch => {
        try {
            const currentDegree = await weatherService.getCurrentDegree();
            dispatch(getCurrentDegreeSuccess(currentDegree));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}
export const getCinemas = string => ({
  type: constants.GET_CINEMAS,
  payload: string,
});

export const getCinemaDetails = string => ({
  type: constants.GET_CINEMA_DETAILS,
  payload: string,
});
