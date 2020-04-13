import React, { Component } from 'react'
import Layout from '../../Layout'
import Whoarewe from './whoarewe'
import Methodology from './methodology'
import Helpus from './helpus'
import Company from './Company'
import Process from './process'
 class About extends Component {
    render() {
        return (
            <React.Fragment>
                 <Layout>
                <Whoarewe/>
                <Methodology/>
                <Process/> 
                <Company/>
                <Helpus/> 
                </Layout> 
            </React.Fragment>
        )
    }
}

export default About
