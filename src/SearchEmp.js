/**
 * Created by PDC2B-Training.PDC2B on 3/7/2017.
 */
import React, { Component } from 'react';
import UserStore from './store/UserStore';
import * as UserActions from './action/UserActions';

class SearchEmp extends Component{
    constructor(){
        super();
        this.state={
            users: UserStore.getUsers()
        };
        this.updateState = this.updateState.bind(this)
    }
    reloadUser(){
        UserActions.recieveUsers();
    }
    updateState(){
        this.setState({
            users:UserStore.getUsers()
        })
    }
    componentDidMount(){
        UserStore.on('change',this.updateState)
    }
    render(){
        const {users} = this.state.users;
        //const li = users.map((user)=>)
        var li= users.map((user)=> {return <li>{user.name}</li>});
        return(
            <div>
                <h1>User Details</h1>
                <ul>
                    {li}
                </ul>
                <button onClick={this.reloadUser.bind(this)}>Create Button</button>
            </div>
        );
    }

}

export default SearchEmp;
