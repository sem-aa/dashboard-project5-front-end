import { createAction } from '@reduxjs/toolkit';

const createCardRequest = createAction('user/createCardRequest');
const createCardSuccess = createAction('user/createCardSuccess');
const createCardError = createAction('user/createCardError');

const editCardRequest = createAction('user/editCardRequest');
const editCardSuccess = createAction('user/editCardSuccess');
const editCardError = createAction('user/editCardError');

const completeCard = createAction('user/completeCard');
// const completeCardSuccess = createAction('user/completeCardSuccess');
// const completeCardRequest = createAction('user/completeCardRequest');
// const completeCardError = createAction('user/completeCardError');

// eslint-disable-next-line
export default {
  createCardRequest,
  createCardSuccess,
  createCardError,
  editCardRequest,
  editCardSuccess,
  editCardError,
  completeCard,
};
