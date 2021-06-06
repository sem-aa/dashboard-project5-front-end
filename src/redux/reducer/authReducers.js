import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import user from './userReducer';
import authActions from '../actions/authActions';
// import cardActions from '../actions/cardActions';

// const userInitialState = {};
// const user = createReducer(userInitialState, {
//   [authActions.logInSuccess]: (_, { payload }) => payload.userData,
//   [authActions.logOutSuccess]: () => userInitialState,
//   [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,

//   [cardActions.createCardSuccess]: (state, { payload }) => ({
//     ...state,
//     cards: [payload.createdCard, ...state.cards],
//   }),
// });

const tokenInitialState = null;
const token = createReducer(tokenInitialState, {
  [authActions.logInSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.logOutSuccess]: () => tokenInitialState,
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
