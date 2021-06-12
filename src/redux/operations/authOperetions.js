import api from '../../services/api';
import authActions from '../actions/authActions';

let sid = ''

const handleLogIn = credentials => dispatch => {
  dispatch(authActions.logInRequest());

  api
    .logIn(credentials)
    .then(({ data }) => {
      sid = data.sid
      api.token.set(data.accessToken);
      dispatch(authActions.logInSuccess(data));
    })
    .catch(error => dispatch(authActions.logInError(error.message)));
};

const handleSignUp = credentials => dispatch => {
  dispatch(authActions.signUpRequest());

  api
    .signUp(credentials)
    .then(({ data }) => {
      dispatch(authActions.signUpSuccess(data));
      handleLogIn(credentials)(dispatch);
    })
    .catch(error => dispatch(authActions.signUpError(error.message)));
};

const handleLogOut = () => dispatch => {
  dispatch(authActions.logOutRequest());

  api
    .logOut()
    .then(() => {
      api.token.unset();
      dispatch(authActions.logOutSuccess());
    })
    .catch(error => dispatch(authActions.logOutError(error.message)));
};

const getCurrentUser = (sid) => (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();
  if (token) {
    api.token.set(token);
    dispatch(authActions.getCurrentUserRequest());
    api
      .refreshToken(sid)
      .then(({ data }) => {
        dispatch(authActions.getCurrentUserSuccess(data));
      })
      .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
  }
};

// eslint-disable-next-line
export default { handleSignUp, handleLogIn, handleLogOut, getCurrentUser };
