import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import Loader from 'react-loader-spinner';
import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from './components/Route/PublicRoute';


const LandingPage = lazy(() => import('./views/landing' /*webpackChunkName: "landingPage" */));
const MainPage = lazy(() => import('./views/main' /*webpackChunkName: "mainPage" */));

const App = () => {

  return (
    <>
      <Suspense
        fallback={<Loader type="TailSpin" color="var(--accent-color)" height={80} width={80} />}
      >
        <Switch>
          <PublicRoute path="/" exact restricted redirectTo="/main" component={LandingPage} />
          <PrivateRoute path="/main" redirectTo="/" component={MainPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
