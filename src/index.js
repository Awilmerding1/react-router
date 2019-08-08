import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import App from './App';
import HomePage from './HomePage';


ReactDOM.render(
  <Router>
    <App/>
  </Router>,
document.getElementById('root'));
