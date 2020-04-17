import Youtubesvg from "./Youtubesvg"
import Facebook from "./Facebook"
import Linkedin from "./Linkedin"
import React, { Component } from 'react'

class footer extends Component {
   
    render() {
        return (
            <div>
            <div className= "footer-box" >
            <div className= "quick-links">
            Quick Links
            </div>
            <div className= "service-links">
            Services
            </div>
            <div className= "contact">
            Contact
            </div>
            <div className= "quick-links-inner">
            Home 
            <br/>
            About 
            <br/>
            Success
            <br/> 
            Stories
            <br/> 
            Insights
            <br/> 
            Career
            <br/> 
            Contact
            </div>
            <div className= "service-inner">
            Open Source Implementation 
            <br/>
            Scala Programming
            <br/> 
            Restful API'S 
            <br/>
            Automated Devops Deployment 
            <br/>
            Big Data Analytics 
            <br/>
            Native Apps Building 
            </div>
            <div className= "service-inner2">
            Full/Mean Stack Development 
            <br/>
            Third Party Integrations
            <br/> 
            Crypto Currency Development 
            <br/>
            Java Programming 
            <br/>
            Us Staffing 
            </div>
            <div className= "contact-inner">
            +91(991)502-1146 
            <br/>
            hr@spineor.com
            </div>
            <div className= "copyright">
            Copyright2020-Spineor.com
            </div>
            <div className= "facebook"><Facebook/></div>
            <div className= "linkedin"><Linkedin/></div>
            <div className= "youtube"><Youtubesvg/></div>
        </div>
<style jsx>{`
.footer-box {
    position: relative;
    width: 1344px;
    height: 434px;
    left: 0px;
    top:5415px;
    background: #000000;
}
.quick-links {
    position: absolute;
    width: 125px;
    height: 28px;
    left: 94px;
    top: 88px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}

.service-links {
    position: absolute;
    width: 125px;
    height: 28px;
    left: 406px;
    top: 88px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}

.contact {
    position: absolute;
    width: 125px;
    height: 28px;
    left: 1044px;
    top: 88px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}

.quick-links-inner {
    position: absolute;
    width: 129px;
    height: 186px;
    left: 94px;
    top: 146px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 170%;
    color: #EBEBEB;
}

.service-inner {
    position: absolute;
    width: 258px;
    height: 186px;
    left: 406px;
    top: 146px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 170%;
    color: #EBEBEB;
}

.service-inner2 {
    position: absolute;
    width: 245px;
    height: 155px;
    left: 723px;
    top: 146px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 170%;
    color: #EBEBEB;
}

.contact-inner {
    position: absolute;
    width: 154px;
    height: 62px;
    left: 1044px;
    top: 147px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 170%;
    color: #EBEBEB;
}

.linkedin {
    background-color: white;
    position: absolute;
    left: 81.38%;
    right: 15.54%;
    top: 62.27%;
    bottom: 28%;   
    border: 2px solid #F1F1F1;
    box-sizing: border-box;
    border-radius: 4px;
}

.facebook {
    background-color: white;
    position: absolute;
    left: 77.31%;
    right: 19.61%;
    top: 62.27%;
    bottom: 28%;    
    border: 2px solid #F1F1F1;
    box-sizing: border-box;
    border-radius: 4px;
}

.youtube {
    background-color: white;
    position: absolute;
    left: 85.38%;
    right: 11.54%;
    top: 62.27%;
    bottom: 28%;
    border: 1px solid #F1F1F1;
    box-sizing: border-box;
    border-radius: 4px;
}

.copyright {
    position: absolute;
    width: 149px;
    height: 14px;
    left: 615px;
    top: 393px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #DCDCDC;
}

`}</style>  
            </div>
        )
    }
}

export default footer
