import * as constants from '../constants';
import MovieService from '../services/MovieService';

export const getCinemas = () => {
  return async (dispatch) => {
    try {
      const cinemas = await MovieService.getCinemas();
      dispatch(getCinemasSuccess(cinemas));
    } catch (err) {
      // TODO: Should dispatch an error action
    }
  };
};

export const getCinemasSuccess = (cinemas) => ({
  type: constants.GET_CINEMAS,
  payload: cinemas,
});

export const getCinemaDetails = (cinemaDetails) => ({
  type: constants.GET_CINEMA_DETAILS,
  payload: cinemaDetails,
});
