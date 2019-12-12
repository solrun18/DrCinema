import { combineReducers } from 'redux';
import cinemas from './CinemasReducer';
import movie from './MovieReducer';
import cinemaDetails from './CinemaDetailsReducer';
import upcomingMovies from './UpcomingReducer';

export default combineReducers({
  cinemas,
  movie,
  cinemaDetails,
  upcomingMovies,
});
