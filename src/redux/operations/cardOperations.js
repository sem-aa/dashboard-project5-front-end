import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';
import actions from '../actions/cardActions';

export const createCard = data => dispatch => {
  dispatch(actions.createCardRequest());

  api
    .createCard(data)
    .then(({ data }) => {
      dispatch(actions.createCardSuccess(data));
    })
    .catch(error => dispatch(actions.createCardError(error.message)));
};

export const editCard = data => dispatch => {
  dispatch(actions.editCardRequest());

  api
    .editCard(data)
    .then(({ data }) => {
      dispatch(actions.editCardSuccess({ ...data }));
    })
    .catch(error => dispatch(actions.editCardError(error.message)));
};
// !! This code do not work !!
// export const completeCard = id => dispatch => {
//   dispatch(actions.completeCardRequest(id));
//   api
//     .completeCard(id)
//     .then(({ data }) => {
//       dispatch(actions.completeCardSuccess(data.completedCard));
//     })
//     .catch(error => console.log(error.message));
// };

export const completeCard = createAsyncThunk(
  actions.completeCard,
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.completeCard(id);
      return data.completedCard;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
