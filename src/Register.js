/**
 * Created by PDC2B-Training.PDC2B on 3/7/2017.
 */
import React, { Component } from 'react';

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            f_name: '',
            id: ''
        }
        this.changeAttr = this.changeAttr.bind(this)
    }
    changeAttr(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
    }
    render(){
        return(
            <div>
                <form>
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Emp_ID</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" name="f_name" value={this.state.f_name} onChange={this.changeAttr}/></td>
                                <td><input type="text" name="id" value={this.state.id} onChange={this.changeAttr}/></td>
                                <button>Add</button>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

}

export default Register;
