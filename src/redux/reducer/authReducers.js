import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import user from './userReducer';

const token = createReducer(null, {
  [authActions.logInSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.logOutSuccess]: () => null,
  [authActions.setGoogleToken]: (_, { payload }) => payload,
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
});
