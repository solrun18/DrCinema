
import * as constants from '../constants';
import { GetCinemaDetails, GetAllCinemas } from '../services/MovieService';

export const getCinemas = () => {
  return async (dispatch) => {
    try {
      console.log('boobs');
      const cinemas = await GetAllCinemas();
<<<<<<< HEAD
      console.log('inside async', cinemas);
      dispatch(this.getCinemasSuccess(cinemas));
=======
      dispatch(getCinemasSuccess(cinemas));
>>>>>>> 7c4982a9e98c944370bf5ed98b1a76a0ec4ebadc
    } catch (err) {
      console.log('We had an ERROR in movieAction --> getCinemas');
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
  console.log(cinemaId);
  return async (dispatch) => {
    try {
      const cinemaDetails = await GetCinemaDetails(cinemaId);
      console.log(cinemaDetails);
      dispatch(getCinemaDetailsSuccess(cinemaDetails));
    } catch (err) {
      console.log('We had an ERROR in movieAction --> getCinemaDetails');
    }
  };
}

export const getCinemaDetailsSuccess = (cinemaDetails) => ({
  type: constants.GET_CINEMA_DETAILS,
  payload: cinemaDetails,
});
