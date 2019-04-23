import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId, userName) => {
  return {
    type: SIGN_IN,
    payload: { userId, userName }
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues);
};
