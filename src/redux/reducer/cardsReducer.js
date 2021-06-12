import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import cardActions from '../actions/cardActions';
import { completeCard } from '../operations/cardOperations';

const cards = createReducer([], {
  [authActions.logInSuccess]: (_, { payload }) => payload.userData.cards,
  [cardActions.createCardSuccess]: (state, { payload }) => [payload.createdCard, ...state],
  [cardActions.deleteCardSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  [completeCard.fulfilled]: (state, { payload }) => [
    payload,
    ...state.filter(card => card._id !== payload._id),
  ],

  [cardActions.editCardSuccess]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? payload : el)),
});

export default cards;
