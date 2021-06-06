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

export const deleteCard = id => dispatch => {
  dispatch(actions.deleteCardRequest());

  api
    .deleteCard(id)
    .then(() => dispatch(actions.deleteCardSuccess(id)))
    .catch(error => dispatch(actions.deleteCardError(error)));
};
