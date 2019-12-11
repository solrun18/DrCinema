
import * as constants from '../constants';
import { GetCinemaDetails, GetAllCinemas } from '../services/MovieService';

export const getCinemas = () => {
  return async (dispatch) => {
    try {
      const cinemas = await GetAllCinemas();
      dispatch(this.getCinemasSuccess(cinemas));
    } catch (err) {
      console.log('We had an ERROR in movieAction --> getCinemas');
      return err;
    }
  };
};

export const getCinemasSuccess = (cinemas) => ({
  type: constants.GET_CINEMAS,
  payload: cinemas,
});


export const getCinemaDetails = (cinemaId) => {
  return async (dispatch) => {
    try {
      const cinemaDetails = await GetCinemaDetails(cinemaId);
      dispatch(this.getCinemaDetailsSuccess(cinemaDetails));
    } catch (err) {
      console.log('We had an ERROR in movieAction --> getCinemaDetails');
      return err
    }
  };
}

export const getCinemaDetailsSuccess = (cinemaDetails) => ({
  type: constants.GET_CINEMA_DETAILS,
  payload: cinemaDetails,
});
