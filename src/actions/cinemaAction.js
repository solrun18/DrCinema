
import * as constants from '../constants';
import { GetCinemaDetails, GetAllCinemas } from '../services/MovieService';

export const getCinemas = () => {
  return async (dispatch) => {
    try {
      console.log('boobs');
      const cinemas = await GetAllCinemas();
      console.log('inside async', cinemas);
      dispatch(this.getCinemasSuccess(cinemas));
    } catch (err) {
      console.log('We had an ERROR in movieAction --> getCinemas');
      return err;
    }
  };
};

export const getCinemasSuccess = (cinemas) => {
  console.log('inside succes', cinemas);
  return {
  type: constants.GET_CINEMAS,
  payload: cinemas,
  };
}

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
