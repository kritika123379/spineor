import React, { Component } from 'react'
import Bestsolutions from './Bestsolutions'
import Contact from './Contact'
import Layout from '../../Layout'
import Myjava from './Myjava'
import Mybanner from './Banner'
import Devops from './Devops'
import Migrate from './Migrate'

 class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
               <Mybanner/>
                <Myjava/>
                <Devops/>
               <Migrate/>
                <Bestsolutions/>
                <Contact/>
                </Layout>
            </React.Fragment>
        )
    }
}

export default Services
