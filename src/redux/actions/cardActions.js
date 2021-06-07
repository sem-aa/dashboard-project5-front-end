import { createAction } from '@reduxjs/toolkit';

const createCardRequest = createAction('user/createCardRequest');
const createCardSuccess = createAction('user/createCardSuccess');
const createCardError = createAction('user/createCardError');

const deleteCardRequest = createAction('user/deleteCardRequest');
const deleteCardSuccess = createAction('user/deleteCardSuccess');
const deleteCardError = createAction('user/deleteCardError');

const editCardRequest = createAction('user/editCardRequest');
const editCardSuccess = createAction('user/editCardSuccess');
const editCardError = createAction('user/editCardError');

// eslint-disable-next-line
export default {
  createCardRequest,
  createCardSuccess,
  createCardError,
  deleteCardRequest,
  deleteCardSuccess,
  deleteCardError,
  editCardRequest,
  editCardSuccess,
  editCardError,
};
