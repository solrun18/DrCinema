import * as constants from '../constants';

export const getCinemas = string => ({
    type: constants.GET_CINEMAS,
    payload: string,
});
