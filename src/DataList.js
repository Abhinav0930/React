/**
 * Created by PDC2B-Training.PDC2B on 3/7/2017.
 */

import React, { Component } from 'react';

class DataList extends Component{
    constructor(props){
        super(props);
        this.state={
            city : this.props.dataListVal
        }
    }
    render(){
        return(
            <div>
            <input list="browsers" type="text" value={this.state.city}/>
                <datalist id="browsers">
                    {
                        this.props.options.map(
                            (opt,i)=><option key={i}>{opt}</option>
                        )

                    }
                </datalist>

            </div>
        );
    }

}

export default DataList;