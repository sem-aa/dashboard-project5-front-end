import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import cardActions from '../actions/cardActions';

const cards = createReducer([], {
  [authActions.logInSuccess]: (_, { payload }) => payload.userData.cards,
  [cardActions.createCardSuccess]: (state, { payload }) => [payload.createdCard, ...state],
  [cardActions.deleteCardSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [cardActions.completeCardSuccess]: (state, { payload }) => [
    ...state.map(card => (card._id !== payload._id ? card : payload)),
  ],
  [cardActions.incompleteCardSuccess]: (state, { payload }) => [
    ...state.map(card => (card._id !== payload._id ? card : payload)),
  ],
  [cardActions.editCardSuccess]: (state, { payload }) =>
    state.map(card => (card._id === payload._id ? payload : card)),
});

export default cards;
