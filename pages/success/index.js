import React, { Component } from 'react'
import Success from '../../components/Success/success-stories'
import Layout from '../../components/Layout'

export class success extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                <Success/>
                </Layout>
            </React.Fragment>
        )
    }
}

export default success
