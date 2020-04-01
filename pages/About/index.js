import React, { Component } from 'react'
import Topcomp from '../../Common/Topcomp'
import Second from '../../Common/Second'
import Third from '../../Common/Third'
import Fourth from '../../Common/Fourth'

export class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Topcomp/>
                <Second/>
                <Third/>
                <Fourth/>
            </React.Fragment>
        )
    }
}

export default About
