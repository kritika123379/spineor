import React, { Component } from 'react'
import Head from 'next/head'
import Phone from './icons/Phone'
import Myhead from './icons/Myhead'
import Email from './icons/Email'
import Mybudget from './icons/Mybudget'
import Down from './icons/Down'


class Contact extends Component {
    render() {
        return (
            <React.Fragment>
            <Head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
             </Head>
                <div className="outer_wrapper">
                <form>
                <div className="inner_header">
                CONTACT US FOR A FREE & CONFIDENTIAL CONSULTATION 
                </div>
                <div className="outer_textfield_name">
                 <div style={{margin:"10px",color:"white"}}>
                 <i className="fas fa-user fa-2x"></i></div>
                </div>
                    <div className="inner_textfield_name"></div>
                    <div className="inner_textfield_text"> Name </div>
                    <div className="outer_textfield_email">
                     <div className="myemail" style={{marginLeft:"10px",marginTop:"10px"}}>
                     <Email/></div>
                    </div>
                    <div className="inner_textfield_email"></div>
                    <div className="inner_textfield_email_text"> Email </div>
                    <div className="outer_textfield_phone">
                    <div className="myphone" 
                    style={{marginTop:"10px",marginLeft:"10px"}}><Phone/></div>
                    </div>
                    <div className="inner_textfield_phone"></div>
                    <div className="inner_textfield_phone_text"> phone </div>
                    <div className="outer_textfield_select">
                    <div className="mybudget" style={{margin:"10px"}}><Mybudget/></div>
                    </div>
                    <div className="inner_textfield_select">
                    <div className="downarrow" style={{marginLeft:"286px"}}><Down/></div>
                    </div>
                    <div className="inner_textfield_select_text"> Select Budget</div>
                    <div className="out_rect">
                    <div className="myquestion"
                     style={{marginTop:"40px",marginLeft:"10px"}}>
                     <Myhead/></div> 
                    </div>
                    <div className="in_rect"></div>
                    <div className="in_text">Requirements</div> 
                    <div className="outer_res"></div>
                    <div className="inner_res"><pre> 15   +   9   =</pre></div>
                    <div className="value"></div>
                    <div className="value_text">Value</div>
                    <div className="button_wrapper"></div>
                    <div className="button_text">SUBMIT</div>
                </form>
                </div>
           
                <style jsx>{`
                .downarrow{
                    position: absolute;
                    left: 0%;
                    right: 0%;
                    top: 19.1%;
                    bottom: 19.1%;
                }
                .mybudget{
                    width: 32px;
                    height: 32px;
                    left: 672px;
                    top: 4318px;
                }
                .myemail{
                    width: 26px;
                    height: 29px;
                    left: 670px;
                    top: 4251px;
                }
                .my_user{
                    width: 26px;
                    height: 26px;
                    left: 282px;
                    top: 4253px;   
                }
                .myphone{
                    width: 27px;
                    height: 27px;
                    left: 282px;
                    top: 4319px;
                    margin-top:80px;  
                    margin-left:10px 
                }
                .myquestion{
                   margin:30px 
                    left: 385px;
                    top: 4329px;
                }
                .button_wrapper{
                    position: absolute;
                    width: 370px;
                    height: 49px;
                    left: 661px;
                    top: 4515px;
                    background: #184A88;
                    border-radius: 3px;
                }
                .button_text{
                    position: absolute;
                    width: 90px;
                    height: 23px;
                    left: 801px;
                    top: 4528px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 20px;
                    line-height: 23px;
                    display: flex;
                    align-items: center;
                    letter-spacing: 0.1em;
                    color: #FFFFFF;
                }
                .outer_res{
                     position: absolute;
                    width: 370px;
                    height: 49px;
                    left: 271px;
                    top: 4515px;
                    background: #C4C4C4;
                    border-radius: 3px;
                }
                .inner_res{
                    position: absolute;
                    width: 210px;
                    height: 28px;
                    left: 288px;
                    top: 4527px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 28px;
                    display: flex;
                    align-items: center;
                    color: #FFFFFF;
                }
                .value{
                    position: absolute;
                    width: 117px;
                    height: 43px;
                    left: 521px;
                    top: 4518px;
                    background: #FFFFFF;
                    border-radius: 3px;
                }
                .value_text{
                    position: absolute;
                    width: 44px;
                    height: 21px;
                    left: 534px;
                    top: 4529px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 21px;       
                    display: flex;
                    align-items: center;
                    color: #A6A6A6;
                }
                .out_rect{
                    position: absolute;
                    width: 760px;
                    height: 125px;
                    left: 271px;
                    top: 4373px;
                    background: #C4C4C4;
                    border-radius: 3px;
                }
                .in_rect{
                   position: absolute;
                    width: 708px;
                    height: 119px;
                    left: 320px;
                    top: 4376px;
                    background: #FFFFFF;
                    border-radius: 3px;
                }
                .in_text{
                    position: absolute;
                    width: 207.46px;
                    height: 21px;
                    left: 335.41px;
                    top: 4387px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 21px;
                    display: flex;
                    align-items: center;
                    color: #A6A6A6;
                }  
                .outer_textfield_phone{
                    position: absolute;
                    width: 370px;
                    height: 49px;
                    left: 271px;
                    top: 4307px;
                    background: #C4C4C4;
                    border-radius: 3px;
                }
                .inner_textfield_phone{
                    position: absolute;
                    width: 318px;
                    height: 43px;
                    left: 320px;
                    top: 4310px;
                    background: #FFFFFF;
                    border-radius: 3px
                }
                .inner_textfield_phone_text{
                    position: absolute;
                    width: 51px;
                    height: 21px;
                    left: 334px;
                    top: 4321px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 21px;
                    display: flex;
                    align-items: center;
                    color: #A6A6A6;
                }
                .outer_textfield_select{
                    position: absolute;
                    width: 370px;
                    height: 49px;
                    left: 661px;
                    top: 4307px;
                    background: #C4C4C4;
                    border-radius: 3px;
                }
                .inner_textfield_select{
                    position: absolute;
                    width: 318px;
                    height: 43px;
                    left: 710px;
                    top: 4310px;
                    background: #FFFFFF;
                    border-radius: 3px;
                }
                .inner_textfield_select_text{
                    position: absolute;
                    width: 109px;
                    height: 21px;
                    left: 724px;
                    top: 4321px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 21px;
                    display: flex;
                    align-items: center;
                    color: #484848;
                }
                .outer_textfield_email{
                    position: absolute;
                    width: 370px;
                    height: 49px;
                    left: 661px;
                    top: 4241px;
                    background: #C4C4C4;
                    border-radius: 3px;
                }
                .inner_textfield_email{
                    position: absolute;
                    width: 318px;
                    height: 43px;
                    left: 710px;
                    top: 4244px;
                    background: #FFFFFF;
                    border-radius: 3px;
                }
                .inner_textfield_email_text{
                    position: absolute;
                    width: 44px;
                    height: 21px;
                    left: 724px;
                    top: 4255px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 21px;
                    display: flex;
                    align-items: center;
                    color: #A6A6A6;
                }
                .inner_header{
                    position: absolute;
                    width: 623px;
                    height: 80px;
                    left: 339px;
                    top: 4155px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 23px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #444444;
                }
                .inner_textfield_text{
                    position: absolute;
                    width: 48px;
                    height: 21px;
                    left: 334px;
                    top: 4255px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 21px;
                    display: flex;
                    align-items: center;
                    color: #A6A6A6;
                }
                .inner_textfield_name{
                    position: absolute;
                    width: 318px;
                    height: 43px;
                    left: 320px;
                    top: 4244px;
                    background: #FFFFFF;
                    border-radius: 3px;
                }
                .outer_textfield_name{
                    position: absolute;
                    width: 370px;
                    height: 49px;
                    left: 271px;
                    top: 4241px;
                    background: #C4C4C4;
                    border-radius: 3px;
                }
               
                `}</style>
            </React.Fragment>
        )
    }
}

export default Contact
