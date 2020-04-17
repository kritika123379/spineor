import React, { Component } from 'react'
import Topbanner from './topbanner'
import Content from "./content";
import Read from './read';
import Layout from '../../Layout';
import Header from "../../Header/header"
import Footer from "../../Footer/footer"

class Events extends Component {
    render() {
        return (
            <div>
            <Header/>
                <Topbanner/>
                <Content/>
                <Read/>
                <div style={{marginTop:"-3200px"}} >
                <Footer/>
                </div>
            </div>
        )
    }
}

export default Events
