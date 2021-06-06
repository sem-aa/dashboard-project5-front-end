import { createAction } from '@reduxjs/toolkit';

const createCardRequest = createAction('user/createCardRequest');
const createCardSuccess = createAction('user/createCardSuccess');
const createCardError = createAction('user/createCardError');

const deleteCardRequest = createAction('user/deleteCardRequest');
const deleteCardSuccess = createAction('user/deleteCardSuccess');
const deleteCardError = createAction('user/deleteCardError');

// eslint-disable-next-line
export default {
  createCardRequest,
  createCardSuccess,
  createCardError,
  deleteCardRequest,
  deleteCardSuccess,
  deleteCardError,
};
