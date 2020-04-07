import React, { Component } from 'react'
import Whoarewe from '../../Common/About/Whoarewe'
import Methodology from '../../Common/About/Methodology'
import Process from '../../Common/About/Process'
import Helpus from '../../Common/About/Helpus'
import Company from '../../Common/About/Company'
import Layout from '../../components/Layout'


export class About extends Component {
    render() {
        return (
            <React.Fragment>
            <Layout>
              <Whoarewe/>
                <Methodology/>
                <Process/>
                <Helpus/>
                <Company/> 
            </Layout>
            </React.Fragment>
        )
    }
}

export default About
