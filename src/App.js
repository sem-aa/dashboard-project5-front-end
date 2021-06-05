import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './views/main';
import landing from '../src/views/landing';


const App = () => (
  <>
  <Switch>
    <Route path="/" exact component={landing} />
    <Route path="/main" component={MainPage} />
    </Switch>
  </>
);



export default App;
