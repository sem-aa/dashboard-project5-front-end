import operations from './authOperations';

export default async function handleError(err, dispatch, fn, data = {}) {
  console.dir(err);
  console.log(err?.response?.data?.message === 'Invalid session');
  console.log(err?.response?.data?.message);
  if (err?.massage === 'Invalid session' || err?.response?.data?.message === 'Invalid session') {
    console.log('wprt');
    return err;
  }
  console.log('не сработал ');
  try {
    if (err.response?.status === 401) {
      const error = await dispatch(operations.refreshToken());
      !error && fn && dispatch(fn(...Object.values(data)));
    }

    if (err.response?.status === 403) {
      fn && dispatch(fn(data));
    }
  } catch (error) {
    return err;
  }

  return err;
}
