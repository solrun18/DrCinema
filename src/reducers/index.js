import { combineReducers } from 'redux';
import cinemas from './CinemasReducer';
import movie from './MovieReducer';
import cinemaDetails from './CinemaDetailsReducer';

export default combineReducers({
  cinemas,
  movie,
  cinemaDetails,
});
