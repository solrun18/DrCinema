import { combineReducers } from 'redux';
import cinemas from './CinemasReducer';
import movie from './MovieReducer';

export default combineReducers({
  cinemas,
  movie,
});
