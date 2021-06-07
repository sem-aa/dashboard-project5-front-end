import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './reducer/authReducers';
import todosReducer from './reducer/todosReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isAuthenticated', 'user'],
};

const todosPersistConfig = {
  key: 'todos',
  storage,
  whitelist: [],
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  todos: persistReducer(todosPersistConfig, todosReducer),
});
