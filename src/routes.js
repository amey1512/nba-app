import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home.js';

class Routes extends Component {
  render() {
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
}
export default Routes;