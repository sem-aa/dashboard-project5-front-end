import { createAction } from '@reduxjs/toolkit';

const signUpRequest = createAction('auth/signUpRequest');
const signUpSuccess = createAction('auth/signUpSuccess');
const signUpError = createAction('auth/signUpError');

const logInRequest = createAction('auth/logInRequest');
const logInSuccess = createAction('auth/logInSuccess');
const logInError = createAction('auth/logInError');

const updatePasswordRequest = createAction('auth/updatePasswordRequest');
const updatePasswordSuccess = createAction('auth/updatePasswordSuccess');
const updatePasswordError = createAction('auth/updatePasswordError');

const logOutRequest = createAction('auth/logOutRequest');
const logOutSuccess = createAction('auth/logOutSuccess');
const logOutError = createAction('auth/logOutError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const refreshTokenRequest = createAction('auth/refreshTokenRequest');
const refreshTokenSuccess = createAction('auth/refreshTokenSuccess');
const refreshTokenError = createAction('auth/refreshTokenError');

// eslint-disable-next-line
export default {
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError,
  updatePasswordRequest,
  updatePasswordSuccess,
  updatePasswordError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenError,
};
