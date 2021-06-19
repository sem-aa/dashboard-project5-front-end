import React, { Suspense, lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from './components/Route/PublicRoute';
// import authOperations from './redux/operations/authOperations';

const LandingPage = lazy(() => import('./views/landing' /*webpackChunkName: "landingPage" */));
const MainPage = lazy(() => import('./views/main' /*webpackChunkName: "mainPage" */));

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(authOperations.getCurrentUser());
  // }, [dispatch]);
  return (
    <>
      <Suspense fallback={<Loader color="var(--bg-header)" />}>
        <Switch>
          <PublicRoute path="/" exact restricted redirectTo="/main" component={LandingPage} />
          <PrivateRoute path="/main" redirectTo="/" component={MainPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
