import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import cardActions from '../actions/cardActions';
// import { completeCard } from '../operations/cardOperations';

const cards = createReducer([], {
  [authActions.logInSuccess]: (_, { payload }) => payload.userData.cards,
  [cardActions.createCardSuccess]: (state, { payload }) => [payload.createdCard, ...state],
  [cardActions.deleteCardSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [cardActions.completeCardSuccess]: (state, { payload }) => {
    console.log(payload);
    if (state.length > 1) {
      return [payload, ...state.filter(card => card._id !== payload._id)];
    }
    return [payload];
  },
  [cardActions.editCardSuccess]: (state, { payload }) =>
    state.map(el => (el._id === payload._id ? payload : el)),
});

export default cards;
