import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import cardActions from '../actions/cardActions';
import { completeCard } from '../operations/cardOperations';

const email = createReducer('', {
  [authActions.logInSuccess]: (_, { payload }) => payload.userData.email,
  [authActions.logOutSuccess]: () => '',
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
  [cardActions.signUpRequest]: () => null,
  [cardActions.logInRequest]: () => null,
  [cardActions.logOutRequest]: () => null,
  [cardActions.getCurrentUserRequest]: () => null,

  [authActions.logInError]: (_, { payload }) => payload,
  [authActions.logOutError]: (_, { payload }) => payload,
  [cardActions.signUpError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [cardActions.createCardError]: (_, { payload }) => payload,

  [cardActions.completeCardError]: (_, { payload }) => payload,
});

export default combineReducers({
  email,
  loadingCards,
  error,
});
