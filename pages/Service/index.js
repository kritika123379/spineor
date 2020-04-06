import React, { Component } from 'react'
import Topbanner from '../../Common/Services/Topbanner'
import Javafactory from '../../Common/Services/Javafactory'
import Development from '../../Common/Services/Development'
import Migration from '../../Common/Services/Migration'
import Bestsolutions from '../../Common/Services/Bestsolutions'
import Contact from '../../Common/Services/Contact'
import Layout from '../../components/Layout'


export class Service extends Component {
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

export default Service
