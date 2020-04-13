import React, { Component } from 'react'

 class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">Events & Celebrations</div>
                <div className="image">PHOTO GALLERY</div>
                <div className="text">
                 At Spineor Conceptions, secret to excellence lies in the fun that<br />
                 we all have together from time-to-time.</div>
                <div className="events">2020 2019 2018 2015 2014</div>
                <div className="outer_wrap1"></div>
                <img className="inner_wrap1" src="images/event1.jpg" />
                <div className="inner_wrap1"></div>
                <div className="outer_wrap2"></div>
                <img className="inner_wrap2" src="images/event2.jpg" />
                <div className="inner_wrap2"></div>
                <div className="outer_wrap3"></div>
                <img className="inner_wrap3" src="images/event3.jpg" />
                <div className="inner_wrap3"></div>
                <style jsx>{`
                .inner_wrap3{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 980px;
                    top: 1030px;
                    background:transparent;
                }
                .inner_wrap1{
                    position: absolute;
                    width: 347px;
                    height: 330px;
                    left: 349px;
                    top: 1018px;
                }
                .outer_wrap1{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 378px;
                    top: 3184px;
                }
                .events{
                    position: absolute;
                    width: 46px;
                    height: 280px;
                    left: 111px;
                    top: 1030px; 
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 308.7%;  
                    color: #184A88;  
                }
                .header{
                    position: absolute;
                    width: 464px;
                    height: 56px;
                    left: 412px;
                    top: 794px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 48px;
                    line-height: 56px;
                    color: #333333;
                }
                .tag{
                    position: absolute;
                    width: 257px;
                    height: 56px;
                    left: 378px;
                    top: 1324px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 308.7%;
                    color: #000000;
                }
                .outer_wrap3{
                    position: absolute;
                    width: 421px;
                    height: 421px;
                    left: 909px;
                    top: 969px;
                }
                .inner_wrap3{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 980px;
                    top: 1030px;
                    background:transparent;
                }
                .inner_wrap2{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 679px;
                    top: 1030px;
                    background: transparent;
                }
                .outer_wrap2{
                    position: absolute;
                    width: 421px;
                    height: 421px;
                    left: 607px;
                    top: 946px;
                }
                .text{
                    position: absolute;
                    width: 590px;
                    height: 50px;
                    left: 349px;
                    top: 908px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 21px;
                    text-align: center;
                    color: #000000;
                }
                .image{
                    position: absolute;
                    width: 160px;
                    height: 21px;
                    left: 574px;
                    top: 870px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 18px;
                    line-height: 21px;
                    color: #184A88;
                }
                `}</style>
            </React.Fragment>
        )
    }
}

export default Content
