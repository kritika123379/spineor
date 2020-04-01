import React, { Component } from 'react'
import Topcomp from '../../Common/Topcomp'

export class Abouttop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             header:""
        }
    }
    updateState(){
        this.setState({
            header:"Who we are"
        })
    }
    render() {
        return (
            <div>
               {this.updateState()} 
               <Topcomp header={this.state.header}/>
            </div>
        )
    }
}

export default Abouttop
