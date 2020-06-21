import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { store } from '../store';
import { Provider } from 'react-redux';
import { history } from '../helpers/history';
import HomePage from './HomePage';
import Login from './login';
import ItemLists from './ItemLists';

class App extends Component {
  render(){
    return (
      <div>
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard" component={HomePage} />
              <Route  path="/dashboard/customer" component={HomePage} />
              <Route  path="/item-list" component={ItemLists} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}


export default App;
