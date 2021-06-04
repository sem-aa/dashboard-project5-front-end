import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
import landing from '../src/views/landing';
import main from '../src/views/main';

// function App() {


// return <Header />;


// }

const App = () => (
  <>
  <Switch>
    <Route path="/" exact component={landing} />
    <Route path="/main" component={main} />
    </Switch>
  </>
);

export default App;
