import React, { Component } from 'react'
import Head from "next/head";
import Whitepaper from './Icons/Whitepaper';

 class Company extends Component {
    render() {
        return (
            <React.Fragment>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
                <div className="outer_wrapper">
                    <div className="inner_wrapper">
                    </div>
                    <div className="top_text">
                        READ MORE ABOUT US
                    </div>
                    <div className="top_header">
                        Know more about our company
                    </div>
                    <div className="inner_text">
                        <p> Our people are our assets.</p>
                        <p>
                            Detailing, scoping not just for current but for future helps us plan<br />
                      and build scalable solutions.</p>
                        <p> Respecting every person we work with, our commitment to our<br />
                       work and to the society.</p>
                        <p> We face new challenges every day but our commitment remains<br />
                        unchanged, and we continue to take determined steps into the <br />
                        future with every individual associated with us.</p>
                    </div>
                    
                        <div className="whitepaper">
                        <Whitepaper/>
                        </div>
                        
                    <div className="button_wrapper">   
                    </div>  
                    <div className="button_text">
                    <span className="mystyle"><i className="fas fa-arrow-down"></i></span> Download Whitepaper
                    </div>                    
                </div>
              
                <style jsx>{`
                .mystyle{
                    margin:10px
                }
                .whitepaper {
                    position: absolute;
                    width: 148px;
                    height: 134px;
                    left: 848px;
                    top: 4244px;
                }
                     .inner_wrapper{
                        position: absolute;
                        width: 987px;
                        height: 427px;
                        left: 111px;
                        top: 4146px;      
                    }
                    .top_text{
                        position: absolute;
                        width: 208px;
                        height: 21px;
                        left: 111px;
                        top: 4146px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: 900;
                        font-size: 18px;
                        line-height: 21px;
                        color: #184A88;
                    }
                    .top_header{
                        position: absolute;
                        width: 384px;
                        height: 120px;
                        left: 111px;
                        top: 4181px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 48px;
                        line-height: 56px;
                        color: #333333;
                    }
                    .inner_text{
                        position: absolute;
                        width: 513px;
                        height: 247px;
                        left: 111px;
                        top: 4326px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: 300;
                        font-size: 18px;
                        line-height: 21px;
                        color: #333333;
                    }
                    .button_wrapper{
                        position: absolute;
                        width: 254px;
                        height: 50px;
                        left: 844px;
                        top: 4503px;
                        background: #184A88;
                        border: 2px solid #184A88;
                        box-sizing: border-box;
                        border-radius: 4px;
                    }
                    .button_text{
                        position: absolute;
                        width: 180px;
                        height: 19px;
                        left: 870px;
                        top: 4518px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 19px;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        color: #FFFFFF;

                    }
                    .button_tag{
                        position: absolute;
                        left: 46.09%;
                        right: 46.09%;
                        top: 0%;
                        bottom: 21.48%;
                        background: #FFFFFF;
                    }
                    
                `}</style>
            </React.Fragment>
        )
    }
}

export default Company
