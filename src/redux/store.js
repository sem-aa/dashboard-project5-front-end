import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: 'store',
  storage,
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
