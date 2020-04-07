import React, { Component } from 'react'

export class Navabout extends Component {
    render() {
        return (
            <React.Fragment> 
            <div className="nav_wrapper"></div>
            <div className="polygon1"></div>
            <div className="inner_wrapper"></div>
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
            <div className="button_text">Explore Services</div>
            <div className="nav_section"></div>
            <div className="whoweare">Who We Are</div>
            <div className="infastructure">Our Infrastructure</div>
            <div className="values">Our Values</div>
            <div className="events">Events & Celebration </div>
            <div className="faq">FAQ</div>
                <style jsx>{`
                .polygon{
                    position: absolute;
                    width: 25px;
                    height: 14px;
                    left: 491px;
                    top: 64px;
                    background: #184A88;
                    border: 1px solid #184A88;
                    box-sizing: border-box;
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
                    border:1px solid black;
                }
                .nav_wrapper{
                    position: relative;
                    width: 1300px;
                    height: 1008px;
                    background: #FFFFFF;
                    border:1px solid black;
                }
                `}</style>
            </React.Fragment>
        )
    }
}

export default Navabout
