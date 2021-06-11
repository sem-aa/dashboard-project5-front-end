import React, {Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Loader from 'react-loader-spinner';
// import MainPage from './views/main';
// import landing from './views/landing';
import { getIsAuthenticated } from './redux/selectors';

const LandingPage = lazy(() => import('./views/landing' /*webpackChunkName: "landingPage" */));
const MainPage = lazy(() => import('./views/main' /*webpackChunkName: "mainPage" */));

const App = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <>
      <Suspense fallback={<Loader color='var(--bg-header)'/>}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/main" component={isAuthenticated ? MainPage : LandingPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
