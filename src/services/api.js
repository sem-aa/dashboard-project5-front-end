import axios from 'axios';

axios.defaults.baseURL = 'https://dashboard-project-back-end.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/* AUTHORIZATION */
const signUp = credentials => axios.post('/auth/register', credentials);
const logIn = credentials => axios.post('/auth/login', credentials);
const logOut = () => axios.post('/auth/logout');
const refreshToken = sid => axios.post('/auth/refresh', { sid });
const updatePassword = email => axios.post('/auth/restorePassword', email);

/* Card */
const createCard = data => axios.post('/card', data);
const editCard = (id, data) => axios.patch(`/card/${id}`, data);
const deleteCard = id => axios.delete(`/card/${id}`);
const getAllCards = () => axios.get('/card');
const completeCard = id => axios.patch(`/card/${id}/complete`);
const incompleteCard = id => axios.patch(`/card/${id}/incomplete`);

// eslint-disable-next-line
export default {
  token,
  signUp,
  logIn,
  logOut,
  refreshToken,
  updatePassword,
  createCard,
  editCard,
  deleteCard,
  getAllCards,
  completeCard,
  incompleteCard,
};
