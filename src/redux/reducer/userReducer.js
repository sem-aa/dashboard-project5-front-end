import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import cardActions from '../actions/cardActions';

const email = createReducer('', {
  [authActions.logInSuccess]: (_, { payload }) => payload.userData.email,
  [authActions.logOutSuccess]: () => '',
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.email,
});

const id = createReducer('', {
  [authActions.logInSuccess]: (_, { payload }) => payload.userData.id,
  [authActions.logOutSuccess]: () => '',
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.id,
});

const cards = createReducer([], {
  [authActions.logInSuccess]: (_, { payload }) => payload.userData.cards,
  [cardActions.createCardSuccess]: (state, { payload }) => [payload.createdCard, ...state],
});

const loadingCards = createReducer(false, {
  [authActions.logInRequest]: () => true,
  [cardActions.createCardRequest]: () => true,

  [authActions.logInSuccess]: () => false,
  [cardActions.createCardSuccess]: () => false,

  [authActions.logInError]: () => false,
  [cardActions.createCardError]: () => false,
});

const error = createReducer(null, {
  [authActions.logInError]: (_, { payload }) => payload,
  [authActions.logOutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [cardActions.createCardError]: (_, { payload }) => payload,
});

export default combineReducers({
  email,
  id,
  cards,
  loadingCards,
  error,
});
