import operations from './authOperations';

export default async function handleError(err, dispatch, fn, data = {}) {
  try {
    if (err.response?.status === 401) {
      await dispatch(operations.refreshToken());
      fn && dispatch(fn(...Object.values(data)));
    }

    if (err.response?.status === 403) {
      fn && dispatch(fn(data));
    }
  } catch (error) {
    return err;
  }

  return err;
}
