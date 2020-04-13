import React, { Component } from 'react'
import Topbanner from './Topbanner'
import Javafactory from './Javafactory'
import Development from './Development'
import Migration from './Migration'
import Bestsolutions from './Bestsolutions'
import Contact from './Contact'
import Layout from '../../Layout'

 class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                <Topbanner/>
                <Javafactory/>
                <Development/>
                <Migration/>
                <Bestsolutions/>
                <Contact/>
                </Layout>
            </React.Fragment>
        )
    }
}

export default Services
