import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import user from './userReducer';

const token = createReducer(null, {
  [authActions.logInSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.refreshTokenSuccess]: (_, { payload }) => payload.newAccessToken,
  [authActions.logOutSuccess]: () => null,
});

const refreshToken = createReducer(null, {
  [authActions.logInSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.refreshTokenSuccess]: (_, { payload }) => payload.newRefreshToken,
  [authActions.logOutSuccess]: () => null,
});

const sid = createReducer(null, {
  [authActions.logInSuccess]: (_, { payload }) => payload.sid,
  [authActions.refreshTokenSuccess]: (_, { payload }) => payload.newSid,
  [authActions.logOutSuccess]: () => null,
});

const isAuthenticated = createReducer(false, {
  [authActions.logInSuccess]: () => true,
  [authActions.logOutSuccess]: () => false,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  refreshToken,
  sid,
});
