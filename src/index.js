import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';

import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'



const options = {
  position: positions.MIDDLE,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store.store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <PersistGate loading={null} persistor={store.persistor}>
          <App />
        </PersistGate>
      </AlertProvider>
    </Provider>
  </BrowserRouter>,

  document.getElementById('root'),
);

reportWebVitals();
