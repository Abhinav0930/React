import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import App from './App';
import './index.css';

import CustomerPortal from './CustomerPortal'

ReactDOM.render(
    <CustomerPortal/> ,
  document.getElementById('root')
);
