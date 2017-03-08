/**
 * Created by PDC2B-Training.PDC2B on 3/7/2017.
 */
import React, { Component } from 'react';
import DataList from './DataList'


class NewForm extends Component{
    constructor(props){
        super(props);
        this.state={
            f_name:'',
            email:'',
            dob:'2017-03-05',
            status:true,
            dataListVal:'1'
        };
        this.changeVal = this.changeVal.bind(this);
        this.cityList = [1,2,3,4];
    }
    changeVal(event){
        const target = event.target;
        const value = event.type==='checkbox'? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
        console.log('o/p object==>' +JSON.stringify(this.state));
    }

    render(){
        return(
            <form>
                <fieldset>
                    <label htmlFor="Name">First Name </label>
                        <input type="text" value={this.state.f_name} name="f_name" onChange={this.changeVal}/><br/>
                    <label htmlFor="Email">Email ID</label>
                        <input type="email" value={this.state.email} name="email" onChange={this.changeVal}/><br/>
                    <label htmlFor="DOB">DOB</label>
                        <input type="date" value={this.state.dob} name="dob" onChange={this.changeVal}/><br/>
                    <label htmlFor="status">Status</label>
                        <input type="checkbox" name="status" onChange={this.changeVal} defaultChecked={this.state.status}/><br/>

                    <label htmlFor="refInput">Ref Input</label>
                        <input type="text" id="refText" defaultValue={NewForm.defaultValue.refText} ref="refText"/><br/>


                    <DataList options={this.cityList} dataListVal={this.state.dataListVal}/>

                </fieldset>
            </form>
        );
    }

}
NewForm.defaultValue={
    refText:'Abhinav Murthy'
}

export default NewForm;