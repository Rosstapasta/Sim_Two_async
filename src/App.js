import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AuthView from './comps/authView';
import DashView from './comps/dashView';
import Wiz1 from './comps/wizSteps/wizOne';
import Wiz2 from './comps/wizSteps/wizTwo';
import Wiz3 from './comps/wizSteps/wizThree';
import Wiz4 from './comps/wizSteps/wizFour';
import Wiz5 from './comps/wizSteps/wizFive';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route path='/' component={ AuthView } exact/>
            <Route path='/dashview' component={ DashView }/>
            <Route path='/wiz1' component={ Wiz1 }/>
            <Route path='/wiz2' component={ Wiz2}/>
            <Route path='/wiz3' component={ Wiz3 }/>
            <Route path='/wiz4' component={ Wiz4}/>
            <Route path='/wiz5' component={ Wiz5}/>
          </Switch>     
      </div>
    );
  }
}

export default App;
