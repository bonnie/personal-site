import React, { Component} from "react";
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
// import ErrorBoundary from './ErrorBoundary';
import "./App.css";

class App extends Component{
  render(){
    return (
      <div className="full-page">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
      </div>
    );
  }
}

export default App;