import api from '../../services/api';
import actions from '../actions/cardActions';
import handleError from './handleError';
// import { createAsyncThunk } from '@reduxjs/toolkit';

export const createCard = data => dispatch => {
  dispatch(actions.createCardRequest());
  api
    .createCard(data)
    .then(({ data }) => {
      dispatch(actions.createCardSuccess(data));
    })
    .catch(error => {
      dispatch(actions.createCardError(error.response?.message));

      handleError(error, dispatch, createCard, { data });
    });
};

export const deleteCard = id => dispatch => {
  dispatch(actions.deleteCardRequest());
  api
    .deleteCard(id)
    .then(() => dispatch(actions.deleteCardSuccess(id)))
    .catch(error => {
      dispatch(actions.deleteCardError(error));

      handleError(error, dispatch, deleteCard, { id });
    });
};

export const editCard = (id, data) => dispatch => {
  dispatch(actions.editCardRequest());
  api
    .editCard(id, data)
    .then(({ data }) => {
      dispatch(actions.editCardSuccess(data.editedCard));
    })
    .catch(error => {
      dispatch(actions.editCardError(error.response?.message));

      handleError(error, dispatch, editCard, { id, data });
    });
};

export const completeCard = id => dispatch => {
  dispatch(actions.completeCardRequest());
  api
    .completeCard(id)
    .then(({ data }) => {
      dispatch(actions.completeCardSuccess(data.editedCard));
    })
    .catch(error => {
      console.log('error:', error);
      dispatch(actions.completeCardError(error.message));
      handleError(error, dispatch);
    });
};


