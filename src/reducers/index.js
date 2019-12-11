import { combineReducers } from 'redux';
import cinemas from './CinemasReducer';
import movie from './MovieReducer';
import upcoming from './UpcomingReducer';

export default combineReducers({
  cinemas,
  movie,
  upcoming,
});
