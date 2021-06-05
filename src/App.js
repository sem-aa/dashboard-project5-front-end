import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './views/main';
import landing from '../src/views/landing';
import Svg from './views/TestSvg'


const App = () => (
  <>
  <Switch>
    <Route path="/" exact component={landing} />
      <Route path="/main" component={MainPage} />
      <Route path="/svg" component={Svg} />
    </Switch>
  </>
);



export default App;
