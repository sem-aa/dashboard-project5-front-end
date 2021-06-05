import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import MainPage from './views/main';
import landing from '../src/views/landing';
import { getIsAuthenticated } from './redux/selectors/authSelectors';

const App = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          component={isAuthenticated ? MainPage : landing}
        />
      </Switch>
    </>
  );
};

export default App;
