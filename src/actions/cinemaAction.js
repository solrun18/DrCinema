
import * as constants from '../constants';
import { GetAllCinemas, GetMoviesByCinemaId } from '../services/MovieService';

export const getCinemasSuccess = (cinemas) => ({
  type: constants.GET_CINEMAS,
  payload: cinemas,
});

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

export const getMoviesByCinemaIdSuccess = (cinemaMovies) => ({
  type: constants.GET_CINEMA_MOVIES,
  payload: cinemaMovies,
});

export const getCinemaMovies = (cinemaId) => {
  return async (dispatch) => {
    try {
      const cinemaMovies = await GetMoviesByCinemaId(cinemaId).getMovies();
      dispatch(getMoviesByCinemaIdSuccess(cinemaMovies));
    } catch (err) {
      console.log('We had an ERROR in movieAction --> getCinemaDetails');
    }
  };
}
