import { createAction } from '@reduxjs/toolkit';

const editCardRequest = createAction('user/editCardRequest');
const editCardSuccess = createAction('user/editCardSuccess');
const editCardError = createAction('user/editCardError');

// eslint-disable-next-line
export default {
  editCardRequest,
  editCardSuccess,
  editCardError,
};
