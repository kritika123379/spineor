import React, { Component } from 'react'
import Layout from '../../Layout'
import Banner from './Banner'
import Inspire from './Inspire'
import Events from './Events'
import Knowmore from './Knowmore'
import Image from './Image'

 class index extends Component {
    render() {
        return (
            <div>
               <Layout>
               <Banner/>
               <Image/>
               <Inspire/>
               <Events/>
               <Knowmore/>
               </Layout> 
            </div>
        )
    }
}

export default index
