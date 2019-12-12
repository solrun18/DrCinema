
import * as constants from '../constants';
import { GetCinemaDetails, GetAllCinemas } from '../services/MovieService';

export const getCinemasSuccess = (cinemas) => {
  return {
  type: constants.GET_CINEMAS,
  payload: cinemas,
  };
}

export const getCinemas = () => {
  return async (dispatch) => {
    try {
      const cinemas = await GetAllCinemas().getCinemas();
      dispatch(getCinemasSuccess(cinemas));
    } catch (err) {
      console.log('We had an ERROR in movieAction --> getCinemas');
    }
  };
};



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
