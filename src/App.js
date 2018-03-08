import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AuthView from './comps/authView';
import DashView from './comps/dashView';
import WizView from './comps/wizView';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route path='/' component={ AuthView } exact/>
            <Route path='/dashview' component={ DashView }/>
            <Route path='/wizview' component={ WizView}/>
          </Switch>     
      </div>
    );
  }
}

export default App;
