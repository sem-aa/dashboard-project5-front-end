// import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';
import actions from '../actions/cardActions';
import handleError from './handleError';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createCard = data => dispatch => {
  dispatch(actions.createCardRequest());
  api
    .createCard(data)
    .then(({ data }) => {
      dispatch(actions.createCardSuccess(data));
    })
    .catch(error => {
      dispatch(actions.createCardError(error.response.message));
      handleError(error, dispatch);
    });
};

export const deleteCard = id => dispatch => {
  dispatch(actions.deleteCardRequest());
  api
    .deleteCard(id)
    .then(() => dispatch(actions.deleteCardSuccess(id)))
    .catch(error => {
      dispatch(actions.deleteCardError(error));
      handleError(error, dispatch);
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
      dispatch(actions.editCardError(error.response.message));
      handleError(error, dispatch);
    });
};

// !! This code do not work !!
// export const completeCard = id => dispatch => {
//   dispatch(actions.completeCardRequest(id));
//   api
//     .completeCard(id)
//     .then(({ data }) => {
//       dispatch(actions.completeCardSuccess(data.completedCard));
//     })
//     .catch(error => {
//       console.log(error.response.message);
//       handleError(error, dispatch);
//     });
// };

export const completeCard = createAsyncThunk(
  actions.completeCard,
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.completeCard(id);
      console.log('response:', data.editedCard);

      return data.editedCard;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  },
);
