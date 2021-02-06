import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home.js';

const Routes = () => {
  // const print = () => {
  //   return "This is first route";
  // }

  return (
    <div>
      <Switch>
        <Route path="/home" exact component = {Home}/>
      </Switch>
      <div>
        <h2>Vaccine is out from Russia.</h2>
        <Home/>
      </div>
    </div>
  )
}

export default Routes;