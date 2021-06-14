import operations from './authOperations';

export default async function handleError(err, dispatch, fn, data = {}) {
  try {
    if (err.response?.status === 401) {
      await dispatch(operations.refreshToken());
      await dispatch(fn(...Object.values(data)));
    }
  } catch (error) {
    return err;
  }

  return err;
}
