import { combineReducers } from 'redux';
import cinemas from './CinemasReducer';
import movie from './MovieReducer';
import cinemaMovies from './CinemaDetailsReducer';
import upcomingMovies from './UpcomingReducer';

export default combineReducers({
  cinemas,
  movie,
  cinemaMovies,
  upcomingMovies,
});
