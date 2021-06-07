import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const deleteModal = createReducer(false, {
  // [todosActions.openDeleteModal]: () => true,
});

export default combineReducers({
  deleteModal,
});
