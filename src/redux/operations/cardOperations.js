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
