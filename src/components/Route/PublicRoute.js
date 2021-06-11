import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/selectors';

export default function PublicRoute({
  isAuthenticated,
  children,
  redirectTo,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsAuthenticated)
  return (
    <Route {...routeProps}>
        {isLoggedIn && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          children
        )}
    </Route>
  );
}