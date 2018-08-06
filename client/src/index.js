import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import browserHistory from './config/history';
import App from './components/App';

ReactDOM.render(
      <Router history={browserHistory}>
        <App />
      </Router>
  , document.getElementById('root')
);