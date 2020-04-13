import React, { Component } from 'react'
import Topbanner from './Topbanner'
import Myimage from './Myimage'
import Work from './Work'
import Knowmore from './Knowmore'
import Layout from '../../Layout'

class Ourvalues extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                <Topbanner/>
                <Myimage/>
                <Work/>
                <Knowmore/>
                </Layout>
            </React.Fragment>
        )
    }
}

export default Ourvalues
