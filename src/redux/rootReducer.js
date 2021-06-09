import { combineReducers } from 'redux';
import cards from './reducer/cardsReducer';
import auth from './reducer/authReducers';

export default combineReducers({
  cards,
  auth,
});
