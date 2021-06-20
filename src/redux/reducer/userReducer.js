import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import cardActions from '../actions/cardActions';

const email = createReducer('', {
  [authActions.logInSuccess]: (_, { payload }) => payload.userData.email,
  [authActions.updatePasswordSuccess]: (_, { payload }) => payload.email,
  [authActions.logOutSuccess]: () => '',
  [authActions.refreshTokenError]: () => '',
});

const loadingCards = createReducer(false, {
  [authActions.logInRequest]: () => true,
  [cardActions.createCardRequest]: () => true,

  [authActions.logInError]: () => false,
  [authActions.logInSuccess]: () => false,
  [cardActions.createCardError]: () => false,
  [cardActions.createCardSuccess]: () => false,
});

const error = createReducer(null, {
  [authActions.signUpRequest]: () => null,
  [authActions.logInRequest]: () => null,
  [authActions.updatePasswordRequest]: () => null,
  [authActions.logOutRequest]: () => null,
  [authActions.getCurrentUserRequest]: () => null,
  [authActions.refreshTokenRequest]: () => null,
  [cardActions.completeCardRequest]: () => null,
  [cardActions.incompleteCardRequest]: () => null,

  [authActions.logInError]: (_, { payload }) => payload,
  [authActions.logOutError]: (_, { payload }) => payload,
  [authActions.signUpError]: (_, { payload }) => payload,
  [authActions.updatePasswordError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [authActions.refreshTokenError]: (_, { payload }) => payload,
  [cardActions.createCardError]: (_, { payload }) => payload,
  [cardActions.completeCardError]: (_, { payload }) => payload,
  [cardActions.incompleteCardError]: (_, { payload }) => payload,
});

export default combineReducers({
  email,
  loadingCards,
  error,
});
