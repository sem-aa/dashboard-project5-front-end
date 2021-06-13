import operations from './authOperations';

export default function handleError(err, dispatch) {
  if (err.response.status === 401) {
    dispatch(operations.refreshToken());
  }

  return err;
}
