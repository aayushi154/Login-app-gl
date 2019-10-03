import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import homepage from './homepage';
import Jobs from './components/Jobs'
import './App.css';
import Accounts from './components/Accounts';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Toolbar from './components/toolbar/Toolbar';

// const createHistory = require('history').createBrowserHistory;
class App extends Component {
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  render() {
    return (
      <div className="container">
        <div style={{margin: '40px 0 0 200px', minHeight: '806px', width: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={true}/>
           <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/homepage"  exact component={homepage} />
            <Route path="/register" component={Register} />
            <Route path="/accounts" component={Accounts} /> 
            <Route path="/jobs" component={Jobs} />
          </Switch>
        </div>
           
      </div>
    );
  }
}

export default App;
