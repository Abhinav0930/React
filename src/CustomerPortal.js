/**
 * Created by PDC2B-Training.PDC2B on 3/7/2017.
 */

import React, { Component } from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';
import Header from './Header';
import './App.css';
import Register from './Register';
import SearchEmp from './SearchEmp';
import Component_1 from './Component_1';


class CustomerPortal extends Component{
    render(){
        return(
            <div>
            <Header/>
            <Router history={hashHistory}>
                <Route path="/" component={Register}/>
                <Route path="/Register" component={Register}/>
                <Route path="/SearchEmp" component={SearchEmp}/>
                <Route path="/FAQ" component={Component_1}/>
            </Router>
            </div>
        );
    }
}

export default CustomerPortal;
