import * as constants from '../constants';

export const getCinemas = (string) => ({
  type: constants.GET_CINEMAS,
  payload: string,
});

export const getCinemaDetails = (string) => ({
  type: constants.GET_CINEMA_DETAILS,
  payload: string,
});
