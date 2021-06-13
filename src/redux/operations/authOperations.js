import api from '../../services/api';
import authActions from '../actions/authActions';
import handleError from './handleError';

const handleLogIn = credentials => dispatch => {
  dispatch(authActions.logInRequest());

  api
    .logIn(credentials)
    .then(({ data }) => {
      api.token.set(data.accessToken);
      dispatch(authActions.logInSuccess(data));
    })
    .catch(error => {
      dispatch(authActions.logInError(error.response.message));
      handleError(error, dispatch);
    });
};

const handleSignUp = credentials => dispatch => {
  dispatch(authActions.signUpRequest());

  api
    .signUp(credentials)
    .then(({ data }) => {
      dispatch(authActions.signUpSuccess(data));
      handleLogIn(credentials)(dispatch);
    })
    .catch(error => {
      dispatch(authActions.signUpError(error.response.message));
      handleError(error, dispatch);
    });
};

const handleLogOut = () => dispatch => {
  dispatch(authActions.logOutRequest());

  api
    .logOut()
    .then(() => {
      api.token.unset();
      dispatch(authActions.logOutSuccess());
    })
    .catch(error => {
      dispatch(authActions.logOutError(error.response.message));
      handleError(error, dispatch);
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();
  if (token) {
    api.token.set(token);
    dispatch(authActions.getCurrentUserRequest());
    api
      .refreshToken()
      .then(({ data }) => {
        dispatch(authActions.getCurrentUserSuccess(data));
      })
      .catch(error => {
        dispatch(authActions.getCurrentUserError(error.response.message));
        handleError(error, dispatch);
      });
  }
};

const refreshToken = () => (dispatch, getState) => {
  const {
    auth: { refreshToken, sid },
  } = getState();

  if (refreshToken) {
    dispatch(authActions.refreshTokenRequest());

    api
      .refreshToken({ sid })
      .then(data => {
        dispatch(authActions.refreshTokenSuccess({ ...data }));
      })
      .catch(error => dispatch(authActions.refreshTokenError(error.response.message)));
  }
};

// eslint-disable-next-line
export default { handleSignUp, handleLogIn, handleLogOut, getCurrentUser, refreshToken };
