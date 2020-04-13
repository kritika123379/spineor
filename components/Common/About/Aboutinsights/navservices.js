import React, { Component } from 'react'
import Mytriangle from '../Icons/Mytriangle'

class Navservices extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="polygon"><Mytriangle/></div>
                    <div className="outer_wrapper"></div>
                    <div className="website">Website Development</div>
                    <div className="list_wrapper">
                    Full Stack Development<br/>
                     Mean Stack Development <br/>
                     PHP Development <br/>
                     .NET Development
                    </div>
                    <div className="web_devop">E-Commerce Web Development</div>
                    <div className="web_list_wrapper">
                    Magento Development<br/>
                     WooCommerce Development<br/>
                      Shopify Development
                    </div>
                    <div className="digital">Digital Marketing </div>
                    <div className="digital_wrapper">
                    SEO Marketing<br/>
                     SMM Marketing<br/>
                      PPC Marketing<br/>
                       Google Analytics
                    </div>
                    <div className="java">JAVA Development</div>
                    <div className="java_wrapper">
                    Enterprise Java Development<br/>
                     Java CMS Services <br/>
                     Java Mobile Development<br/> 
                     Java Migration 
                    </div>
                    <div className="web">Web and Graphics Design</div>
                    <div className="web_wrapper">
                    UI/UX Design<br/>
                     Print Making<br/>
                     Social Creatives
                    </div>
                    <div className="cms">CMS Development</div>
                    <div className="cms_wrapper">
                    Wordpress Development<br/>
                     OpenCart Development 
                     </div>
                    <style jsx>{`
                    .polygon{
                        position: absolute;
                        left: 591px;
                        top: 54px;
                    }
                    .cms{
                        position: absolute;
                    width: 200px;
                    height: 28px;
                    left: 923px;
                    top: 474px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 28px;
                    color: #FFFFFF;
                    }
                    .cms_wrapper{
                        position: absolute;
                    width: 196px;
                    height: 72px;
                    left: 923px;
                    top: 524px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 200%;
                    color: #FFFFFF;
                    }
                    .web{
                        position: absolute;
                        width: 276px;
                        height: 28px;
                        left: 493px;
                        top: 474px;          
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 28px;                       
                        color: #FFFFFF;                     
                    }
                    .web_wrapper{
                        position: absolute;
                        width: 129px;
                        height: 108px;
                        left: 493px;
                        top: 524px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 200%;
                        color: #FFFFFF;
                    }
                    .java{
                        position: absolute;
                        width: 214px;
                        height: 28px;
                        left: 63px;
                        top: 474px;        
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 28px;              
                        color: #FFFFFF;
                    }
                    .java_wrapper{
                        position: absolute;
                        width: 238px;
                        height: 180px;
                        left: 63px;
                        top: 524px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 200%;
                        color: #FFFFFF;
                    }
                    .digital_wrapper{
                        position: absolute;
                        width: 135px;
                        height: 144px;
                        left: 923px;
                        top: 214px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 200%;
                        /* or 36px */
                           color: #FFFFFF;
                    }
                    .digital{
                        position: absolute;
                        width: 186px;
                        height: 28px;
                        left: 923px;
                        top: 164px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 28px;
                        color: #FFFFFF;
                    }
                    .web_list_wrapper{
                        position: absolute;
                        width: 239px;
                        height: 108px;
                        left: 492px;
                        top: 214px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 200%;
                        /* or 36px */
                        color: #FFFFFF
                    }
                    .web_devop{
                        position: absolute;
                        width: 342px;
                        height: 28px;
                        left: 492px;
                        top: 164px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 28px;
                        color: #FFFFFF;
                    }
                    .list_wrapper{
                        position: absolute;
                        width: 205px;
                        height: 144px;
                        left: 63px;
                        top: 214px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 200%;
                        color: #FFFFFF;
                    }
                    .outer_wrapper{
                        position: absolute;
                        width: 1300px;
                        height: 717px;
                        left: 0px;
                        top: 74px;        
                        background: #184A88;
                
                    }
                    .website{
                    position: absolute;
                    width: 242px;
                    height: 28px;
                    left: 63px;
                    top: 164px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 28px;
                    color: #FFFFFF;
                    }
                    `}</style>
            </React.Fragment>
        )
    }
}

export default Navservices
