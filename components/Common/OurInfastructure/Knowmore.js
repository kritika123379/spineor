import React, { Component } from 'react'
import Head from 'next/head'
import Whitepaper from '../About/Icons/Whitepaper'

 class Knowmore extends Component {
    render() {
        return (
            <React.Fragment> 
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                </Head>   
                <div className="outer_wrapper"></div>
                <div className="outer_header">Know more about <br/> our company</div>
                <div className="inner_header">READ MORE ABOUT US</div>
                <div className="paragraph">
                <p>Our people are our assets.</p>
                <p> Detailing, scoping not just for current but for future helps us plan<br/>
                 and build scalable solutions.</p>
                 <p> Respecting every person we work with, our commitment to our <br/>
                  work and to the society.</p>
                    <p>We face new challenges every day but our commitment remains <br/>
                    unchanged, and we continue to take determined steps into the <br/>
                    future with every individual associated with us.</p>
                </div>
                <div className="whitepaper">
                <Whitepaper/>
                </div> 
                <div className="outer_button"></div>
                <div className="inner_button">
                <span className="mystyle"><i className="fas fa-arrow-down"></i></span>  Download    Whitepaper
                </div>
                <style jsx>{`
                .whitepaper {
                    position: absolute;
                    width: 148px;
                    height: 134px;
                    left: 848px;
                    top: 3843px;
                }
                .outer_button{
                    position: absolute;
                    width: 254px;
                    height: 50px;
                    left: 844px;
                    top: 4103px;  
                    background: #184A88;
                    border: 2px solid #184A88;
                    box-sizing: border-box;
                    border-radius: 4px;
                }
                .inner_button{
                    position: absolute;
                    width: 200px;
                    height: 19px;
                    left: 878px;
                    top: 4118px;
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
                .paragraph{
                    position: absolute;
                    width: 513px;
                    height: 247px;
                    left: 111px;
                    top: 3926px;   
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 21px;   
                    color: #333333;
                }
                .inner_header{
                    position: absolute;
                    width: 210px;
                    height: 21px;
                    left: 111px;
                    top: 3746px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 18px;
                    line-height: 21px;
                    color: #184A88;
                }
                .outer_header{
                    position: absolute;
                    width: 384px;
                    height: 120px;
                    left: 111px;
                    top: 3781px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 48px;
                    line-height: 56px;
                    color: #333333;
                }
                .outer_wrapper{
                    position: absolute;
                    width: 987px;
                    height: 427px;
                    left: 111px;
                    top: 3746px;
                }
                .mystyle{
                    margin:10px
                }
                `}</style>
            
            </React.Fragment>
        )
    }
}

export default Knowmore
