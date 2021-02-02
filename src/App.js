import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import Profile from './components/Profile'
import state from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/profile' component={Profile} />
          <Route path='/Settings' component={Settings} />
        </Switch> 
      </div >
    </Router >
  );
}

export default App
