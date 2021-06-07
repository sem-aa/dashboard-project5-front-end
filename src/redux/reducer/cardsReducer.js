import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import cardActions from '../actions/cardActions';

const cards = createReducer([], {
  [authActions.logInSuccess]: (_, { payload }) => payload.userData.cards,
  [cardActions.createCardSuccess]: (state, { payload }) => [payload.createdCard, ...state],
});

export default cards;
