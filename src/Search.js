/**
 * Created by PDC2B-Training.PDC2B on 3/6/2017.
 */
import React, { Component } from 'react';
import './App.css';


class Search extends Component{
    constructor(props){
        super(props);

        this.state={
            currDate : new Date(),
            name : this.props.name
        };
        this.searchClick = this.searchClick.bind(this);
        this.nameObj=[];
    }
    searchClick(event){
        this.setState({currDate : new Date(),name:event.target.value});
        this.addObj(event.target.value);
    }
    addObj(name){
        this.nameObj.push(name);
        console.log(this.nameObj);
    }


    render() {
        return(
            <div>
                <p>Hello, {this.props.name}!!!</p><br/>
                <p>It is {this.state.currDate.toTimeString()}</p><br/>
                <input type="text" className="searchBar" placeholder="Search.." value={this.state.name} onChange={this.searchClick}/>
            </div>
    );
    }
    }

export default Search;