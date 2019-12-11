import UpcomingService from '../services/UpcomingService';
import * as constants from '../constants';

export const getUpcomingMovies = () => async (dispatch) => {
  try {
    const upcomingMovies = await UpcomingService.getUpcomingMovies();
    dispatch(getUpcomingMoviesSuccess(upcomingMovies));
  } catch (err) {
    // Should do something
  }
};

const getUpcomingMoviesSuccess = (upcomingMovies) => ({
  type: constants.GET_UPCOMING_MOVIES,
  payload: upcomingMovies,
});
