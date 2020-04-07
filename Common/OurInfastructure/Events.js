import React, { Component } from 'react'
import Layout from '../../components/Layout'

export class Events extends Component {
    render() {
        return (
            <React.Fragment>
            <Layout>
                <div className="events">Events & Celebrations</div>
                <div className="inner_header">PHOTO GALLERY</div>
                <div className="innermost_header"> At Spineor Conceptions, secret to excellence lies in the fun<br/>
                 that we all have together from time-to-time.</div>
                 <div className="small_div">2020 2019 2018 2015 2014</div>
                
                 
                 <div className="image_section1"></div>
                 <div className="image1"></div>
                 <img className="image1" src=""/>
                 <div className="rectangle1"></div>
                 <div className="tag">International Women's Day 2020 </div>
                 
                 
                 <div className="image_section2"></div>
                 <div className="image2"></div>
                 <div className="rectangle2"></div>
                 <img className="image2" src=""/>

                 <div className="image_section3"></div>
                 <div className="image3"></div>
                 <div className="rectangle3"></div>
                 <img className="image3" src=""/>
                <style jsx>{`
                .image_section1{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 378px;
                    top: 3184px;
                }
                .image1{
                    position: absolute;
                    width: 347px;
                    height: 326px;
                    left: 354px;
                    top: 3173px;
                    background: url(sdf.jpg);
                }
                .rectangle1{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 378px;
                    top: 3184px;
                    background: #C4C4C4;
                }
                .image_section2{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 679px;
                    top: 3184px;
                }
                .image2{
                    position: absolute;
                    width: 562px;
                    height: 562px;
                    left: 607px;
                    top: 3100px;
                    background: url(IMG_2676.jpg);
                }
                .rectangle2{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 679px;
                    top: 3184px;   
                    background: #C4C4C4; 
                }
                .image3{
                    position: absolute;
                    width: 421px;
                    height: 421px;
                    left: 909px;
                    top: 3123px;
                    background: url(IMG_2672.jpg);
                }
                .image_section3{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 980px;
                    top: 3184px;
                }
                .rectangle3{
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    left: 980px;
                    top: 3184px; 
                    background: #C4C4C4;   
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
                </Layout>
            </React.Fragment>
        )
    }
}

export default Events
