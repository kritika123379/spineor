import React, { Component } from 'react'
import Head from "next/head";
import Link from "next/link";
import Whoarewe from '../whoarewe';
import Mytriangle from '../Icons/Mytriangle';

 class Navabout extends Component {
    render() {
        return (
            <React.Fragment> 
            <Head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
           <div className="nav_wrapper"></div>
            <span  className="polygon"><Mytriangle/></span>
          
           {/* <div className="inner_wrapper"></div>
            <div className="design_wrapper">Design, <br/>Develop, Test<br/> & Delivered</div>
            <div className="design_text">
                Bespoke products &<br/>
                platforms engineered to<br/>
                elevate your customers' <br/>
                experience, earn their<br/>
                loyalty & grow your<br/>
                    business.
        </div>
            <div className="button_wrapper">
            </div>
        <div className="button_text">Explore Services</div>*/}

                <div className="nav_section"></div>
                <Link href="/who-are-we">
                    <a>
                        <div className="whoweare">
                        Who We Are
                        </div>
                    </a>
                </Link>
                <Link href="/our-infrastructure">
                    <a>
                        <div className="infastructure">Our Infrastructure</div>
                    </a>
                </Link>
                <Link href="/our-values">
                    <a>
                        <div className="values">Our Values</div>
                    </a>
                </Link>
                <Link href="/events-celebrations">
                    <a>
                        <div className="events">Events & Celebration </div>
                    </a>
                </Link>
                <Link href="/faq">
                    <a>
                        <div className="faq">FAQ</div>
                    </a>
                </Link>
                <style jsx>{`
                .polygon{
                    position: absolute; 
                    left: 491px;
                    top: 54px;
                }
                .faq{
                    position: absolute;
                    width: 182px;
                    height: 33px;
                    left: 451px;
                    top: 242px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 200%;
                    color: #FFFFFF;
                }
                .events{
                 position: absolute;
                width: 182px;
                height: 33px;
                left: 451px;
                top: 204px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 200%;
                color: #FFFFFF;
                }
                .values{
                    position: absolute;
                    width: 156px;
                    height: 31px;
                    left: 451px;
                    top: 168px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 200%;
                    color: #FFFFFF;
                }
                .infastructure{
                    position: absolute;
                    width: 151px;
                    height: 31px;
                    left: 451px;
                    top: 132px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 200%;
                    color: #FFFFFF;
                }
                .whoweare{
                    position: absolute;
                    width: 98px;
                    height: 36px;
                    left: 451px;
                    top: 91px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 200%;
                    color: #FFFFFF;
                }
                .nav_section{
                    position: absolute;
                    width: 217px;
                    height: 214px;
                    left: 433px;
                    top: 74px;
                    background: #184A88;
                }
                .button_wrapper{
                    position: absolute;
                    width: 194px;
                    height: 50px;
                    left: 756px;
                    top: 504px;
                    background: #FFFFFF;
                    border: 2px solid #184A88;
                    box-sizing: border-box;
                    border-radius: 4px;
                }
                .button_text{
                    position: absolute;
                    width: 118px;
                    height: 19px;
                    left: 794px;
                    top: 519px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 19px;
                    color: #184A88;
                }
                .design_text{
                    position: absolute;
                    width: 411px;
                    height: 266px;
                    left: 754px;
                    top: 205px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 36px;
                    line-height: 42px;
                    color: #222222;
                }
                .design_wrapper{
                    position: absolute;
                    width: 586px;
                    height: 345px;
                    left: 85px;
                    top: 205px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 90px;
                    line-height: 105px;
                    color: #333333;
                
                }
                .inner_wrapper{
                    position: absolute;
                    width: 1300px;
                    height: 630px;
                    left: 0px;
                    top: 74px;
                    background: #FFFFFF;
                }
                .nav_wrapper{
                    position: relative;
                    width: 1300px;
                    height: 1008px;
                    background: #FFFFFF;
                }
                `}</style>
            </React.Fragment>
        )
    }
}

export default Navabout
