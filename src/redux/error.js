import { createReducer } from '@reduxjs/toolkit';
import auth from './actions/authActions';


const intialState = null;
const errorReducer = createReducer(intialState, {
  [auth.signUpError]: (_, { payload }) => payload,
  [auth.logInError]: (_, { payload }) => payload,
  [auth.logOutError]: (_, { payload }) => payload,
  [auth.getCurrentUserError]: (_, { payload }) => payload,

  [auth.signUpRequest]: () => intialState,
  [auth.logInRequest]: () => intialState,
  [auth.logOutRequest]: () => intialState,
  [auth.getCurrentUserRequest]: () => intialState,

});

export default errorReducer;
