import { GetMovieDetailsById } from '../services/MovieService';
import * as constants from '../constants';

export const getMovieDetailsById = (movieId, cinemaId) => {
  return async (dispatch) => {
    try {
      const movie = await GetMovieDetailsById(movieId, cinemaId);
      dispatch(this.getMovieDetailsByIdSuccess(movie));
    } catch (err) {
      console.log('We had an ERROR in movieAction --> GetMovieDetailsById');
      return err
    }
  };
}

const getMovieDetailsByIdSuccess = (movie) => ({
  type: constants.GET_MOVIE_DETAILS_BY_ID,
  payload: movie,
});
