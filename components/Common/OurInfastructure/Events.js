import React, { Component } from 'react';

class Events extends Component {
    render() {
        return (
            <React.Fragment>
            
                <div className="events">Events & Celebrations</div>
                <div className="inner_header">PHOTO GALLERY</div>
                <div className="innermost_header"> At Spineor Conceptions, secret to excellence lies in the fun<br/>
                 that we all have together from time-to-time.</div>
                 <div className="small_div">2020 2019 2018 2015 2014</div>
                
                 
               <div className="image_wrapper1"></div>
                <div className="inner_envelope1"></div>
                <img  className="inner_envelope1" src="images\event1.jpg"/>
                <div className="outer_envelope1"></div>
                <div className="tag">International Women's Day 2020 </div>

                <div className="image_wrapper2"></div>
                <div className="inner_envelope2"></div>
                <img  className="inner_envelope2" src="images\event2.jpg"/>
                <div className="outer_envelope2"></div>

                <div className="image_wrapper3"></div>
                <div className="inner_envelope3"></div>
                <img className="inner_envelope3" src="images\event3.jpg"/>
                <div className="outer_envelope3"></div>
                <style jsx>{`
                .image_wrapper3{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 980px;
                    top: 3184px;
                }
                .inner_envelope3{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 981px;
                    top: 3184px;
                }
                .outer_envelope3{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 980px;
                    top: 3184px;
                    background: transparent;
                }
                .image_wrapper2{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 679px;
                    top: 3184px;
                }
                .inner_envelope2{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 679px;
                    top: 3184px;
                }
                .outer_envelope2{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 679px;
                    top: 3184px;
                    background: transparent;
                }
               .image_wrapper1{
                position: absolute;
                width: 300px;
                height: 300px;
                left: 349px;
                top: 3184px;   
               }
               .inner_envelope1{
                position: absolute;
                width: 347px;
                height: 326px;
                left: 349px;
                top: 3170px;
                background: transparent;
               }
               .outer_envelope1{
                position: absolute;
                width: 300px;
                height: 300px;
                left: 349px;
                top: 3184px;
                background: transparent
               }

                .tag{
                    position: absolute;
                    width: 257px;
                    height: 56px;
                    left: 378px;
                    top: 3478px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 308.7%;
                    color: #000000;
                }
                .events{
                    position: absolute;
                    width: 464px;
                    height: 56px;
                    left: 412px;
                    top: 2948px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 48px;
                    line-height: 56px;
                    color: #333333;
                }
                .inner_header{
                    position: absolute;
                    width: 160px;
                    height: 21px;
                    left: 574px;
                    top: 3024px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 18px;
                    line-height: 21px;
                    color: #184A88;
                }
                .innermost_header{
                    position: absolute;
                    width: 590px;
                    height: 50px;
                    left: 349px;
                    top: 3062px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 21px;
                    text-align: center;
                    color: #000000;
                }
                .small_div{
                    position: absolute;
                    width: 46px;
                    height: 280px;
                    left: 111px;
                    top: 3184px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 308.7%;
                    color: #184A88;
                }
                `}</style>
                
            </React.Fragment>
        )
    }
}

export default Events;
