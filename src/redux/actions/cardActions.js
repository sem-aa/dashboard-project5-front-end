import { createAction } from '@reduxjs/toolkit';

const createCardRequest = createAction('user/createCardRequest');
const createCardSuccess = createAction('user/createCardSuccess');
const createCardError = createAction('user/createCardError');

// eslint-disable-next-line
export default {
  createCardRequest,
  createCardSuccess,
  createCardError,
};
