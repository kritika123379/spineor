import React, { Component } from 'react'
import Head from "next/head";

export class Bestsolutions extends Component {
    render() {
        return (
            <React.Fragment>
            <Head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
                <div className="top_header">
                Why Spineor is the best solutions?
                </div>
                <div className="product_text">
                Product Manager for your product
                </div>
                <div className="confidential">100% Confidential Consultation including a signed NDA!</div>
                <div className="documentation"> Detailed Documentation <br/> and Analysis of your project</div>
                <div className="deliver">We always deliver the <br/> source code with the project.</div>
            {/*<div className="line1">  </div>      
              <div className="circle_vector"><i className="fas fa-check-circle"></i></div>       
        <div className="line2"></div>*/}
        
            
                <style jsx>{`
                
                .top_header{
                    position: absolute;
                    width: 738px;
                    height: 56px;
                    left: 281px;
                    top: 3734px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 48px;
                    line-height: 56px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #333333;
                
                }
                .product_text{
                    position: absolute;
                    width: 183px;
                    height: 56px;
                    left: 267px;
                    top: 3873px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 24px;
                    line-height: 28px;
                    display: flex;
                    align-items: center;
                    text-align: right;
                    color: #444444;
                }
                .confidential{
                    position: absolute;
                width: 337px;
                height: 50px;
                left: 113px;
                top: 3982px;
                font-family: Roboto;
                font-style: normal;
                font-weight: 300;
                font-size: 24px;
                line-height: 28px;
                display: flex;
                align-items: center;
                text-align: right;
                color: #444444;
                }
                .documentation{
                    position: absolute;
                    width: 291px;
                    height: 56px;
                    left: 850px;
                    top: 3874px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 24px;
                    line-height: 28px;
                    display: flex;
                    align-items: center;
                    color: #444444;
                }
                .deliver{
                    position: absolute;
                    width: 303px;
                    height: 56px;
                    left: 850px;
                    top: 3978px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 24px;
                    line-height: 28px;
                    display: flex;
                    align-items: center;
                    color: #444444;
                }
                .line1{
                    position: absolute;
                    width: 318.2px;
                    height: 0px;
                    left: 537px;
                    top: 3846px;
                    border: 1px solid #D3D3D3;
                    transform: rotate(45deg);
                }
                .line2{
                    position: absolute;
                    width: 318.2px;
                    height: 0px;
                    left: 537px;
                    top: 4071px;
                    border: 1px solid #D3D3D3;
                    transform: rotate(-45deg);
                }
                .fas fa-check-circle{
                    position: absolute;
                    left: 0%;
                    right: 0%;
                    top: 0%;
                    bottom: 0%;
                    background: #32BEA6;
                }
                `}</style>
            </React.Fragment>
        )
    }
}

export default Bestsolutions
