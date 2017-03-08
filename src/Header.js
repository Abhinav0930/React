/**
 * Created by PDC2B-Training.PDC2B on 3/7/2017.
 */

import React, { Component } from 'react';

class Header extends Component{

    render(){

        return(
            <div>
                <span className="style"><a href="#/Register">Register</a></span>
                <span className="style"><a href="#/SearchEmp">Search</a></span>
                <span className="style"><a href="#/FAQ">FAQ</a></span>
            </div>


        );
    }
}

export default Header;
