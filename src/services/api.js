import axios from 'axios';

// axios.defaults.baseURL = 'https://dashboard-project-back-end.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:3001';

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

/* Card */
const createCard = data => axios.post('/card', data);
const editCard = (id, data) => axios.patch(`/card/${id}`, data);
const deleteCard = id => axios.delete(`/card/${id}`);
const getAllCards = () => axios.get('/card');
const completeCard = id => axios.patch(`/card/${id}/complete`);

// eslint-disable-next-line
export default {
  token,
  signUp,
  logIn,
  logOut,
  refreshToken,
  createCard,
  editCard,
  deleteCard,
  getAllCards,
  completeCard,
};
