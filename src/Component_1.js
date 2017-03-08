/**
 * Created by PDC2B-Training.PDC2B on 3/7/2017.
 */
import React, { Component } from 'react';
import axios from 'axios';

class Component_1 extends Component{
    sendRequest(){

        axios.get("https://test-fba9c.firebaseio.com/person.json").then(function(response){

            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }
    render(){
        return(
            <div>
                <h1>This is first component View</h1>
                <button onClick={this.sendRequest}>Get FireBase DB</button>
            </div>
        );
    }

}

export default Component_1;
