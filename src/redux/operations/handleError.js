import operations from './authOperations';



export default async function handleError(err, dispatch, fn, data = {}) {
  if (err?.massage === 'Invalid session' || err?.response?.data?.message === 'Invalid session') {
    console.log('wprt');
    return err;
  }
  try {

    if (err?.massage === 'Invalid session' || err?.response?.data?.message === 'Invalid session') {
      return err;

    }

    if (err.response?.status === 401) {
      const error = await dispatch(operations.refreshToken());
      !error && fn && dispatch(fn(...Object.values(data)));
    }
  } catch (error) {
    return err;
  }

  return err;
}
