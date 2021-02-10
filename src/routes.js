import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home.js';
import Layout from './hoc/Layout/layout.js';

class Routes extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Switch>
            <Route path="/home" exact component = {Home}/>
          </Switch>
          <div>
            <h2>Vaccine is out from Russia.</h2>
            <Home/>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Routes;