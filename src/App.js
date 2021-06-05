import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import MainPage from './views/main';
import landing from '../src/views/landing';
import Svg from './views/TestSvg'
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
 <Route path="/svg" component={Svg} />
      </Switch>
    </>
  );
};

export default App;
