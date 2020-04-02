import React, { Component } from 'react'
import Whoarewe from '../../Common/About/Whoarewe'
import Methodology from '../../Common/About/Methodology'
import Process from '../../Common/About/Process'
import Helpus from '../../Common/About/Helpus'
import Company from '../../Common/About/Company'


export class About extends Component {
    render() {
        return (
            <React.Fragment>
              <Whoarewe/>
                <Methodology/>
                <Process/>
                <Helpus/>
                <Company/>
            </React.Fragment>
        )
    }
}

export default About
