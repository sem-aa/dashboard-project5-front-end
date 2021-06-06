import api from '../../services/api';
import actions from '../actions/editCardActions';

export const egitCard = data => dispatch => {
  dispatch(actions.editCardRequest());

  api
    .editCard(data)
    .then(({ data }) => {
      dispatch(actions.editCardSuccess({...data}));
    })
    .catch(error => dispatch(actions.editCardError(error.message)));
};
