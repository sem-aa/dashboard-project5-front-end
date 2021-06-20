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

// const completeCard = createAction('user/completeCard');
const completeCardSuccess = createAction('user/completeCardSuccess');
const completeCardRequest = createAction('user/completeCardRequest');
const completeCardError = createAction('user/completeCardError');

const incompleteCardSuccess = createAction('user/incompleteCardSuccess');
const incompleteCardRequest = createAction('user/incompleteCardRequest');
const incompleteCardError = createAction('user/incompleteCardError');

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
  completeCardSuccess,
  completeCardRequest,
  completeCardError,
  incompleteCardSuccess,
  incompleteCardRequest,
  incompleteCardError,
};
