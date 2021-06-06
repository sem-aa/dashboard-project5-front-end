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

export default combineReducers({
  email,
  id,
  cards,
});
