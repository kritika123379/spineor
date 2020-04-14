import React, { Component } from 'react'
import Navabout from '../Common/About/Aboutinsights/navabout'
import Navservices from '../Common/About/Aboutinsights/navservices'
import Link from "next/link"
import About from '../Common/About'

 class header extends Component {
    constructor(props) {
        super(props)
        this.state = {
             shownav:false,
             showcomponent:false,
            
        }
    }
    onbtnclick = () => {
        this.setState({
            shownav:true
        })
        this.Message();
       }
       Message(){
        setTimeout(()=>{
            this.setState({
                shownav:false
            })
        },5000)
    }
    onButtonEnter = () => {
        this.setState({
            showcomponent :true
        })
       this.showMessage(); 
    }
    showMessage(){
        setTimeout(()=>{
            this.setState({
                showcomponent:false
            })
        },5000)
    }
   
    render() {
        return (
            <React.Fragment>
            {
                this.state.shownav ?
                     <Navabout/>
                     : null
                   
            }
           
            {
                this.state.showcomponent ?
                <Navservices/>
                :null
            }
           
            <div className= "nav-box">
            
            <Link href="/" onMouseEnter={()=>onhomeEnter()}>
                <a>
                <img className= "spineor-logo" src= "\images\spineor-logo.png"></img>
                </a>
            </Link>
            <Link href="/about">
                    <a>
                <div className= "about"
                onMouseOver={()=>this.onbtnclick()} 
                onMouseMove={()=>this.onbtnclick()} 
                onMouseEnter={()=>this.onbtnclick()} 
                onMouseLeave={()=>this.onbtnclick()}>
                    ABOUT
                </div>
                    </a>
         </Link>
         
            <Link  href="/services">
            <a>
                <div className= "service"
                onMouseOver={()=>this.onButtonEnter()} 
                onMouseMove={()=>this.onButtonEnter()} 
                onMouseEnter={()=>this.onButtonEnter()} 
                onMouseLeave={()=>this.onButtonEnter()}>
                    
                
                </div>
            </a>
            </Link>
            <Link href="/success-stories">
            <a>
                <div className= "success">
                    SUCCESS STORIES
                </div>
            </a>
            </Link>
            <Link href="/insights">
            <a>
                <div className= "insights">
                    INSIGHTS
                </div>
            </a>
            </Link>
            <Link href="/">
            <a>
                <div className= "career">
                    CAREER
                </div>
            </a>
            </Link>
        
            <Link href="/">
            <a>
                <div className= "contact">
                    CONTACT
                </div>
            </a>
            </Link>
                <div>
                <button className= "quote-button"><a>GET A QUOTE</a></button>
                </div>
            </div>
          
            <style  jsx>{`
        
            .nav-box {
                position: absolute;
                width: 1344px;
                height: 74px;
                left: 0px;
                top: 0px;
                position: fixed;
                background: transparent;
                
            }
        
            .spineor-logo {
                position: absolute;
                width: 140px;
                height: 41px;
                left: 19px;
                top: 16px;
            }
        
            .about {
                position: absolute;
                width: 45px;
                height: 16px;
                left: 480px;
                top: 30px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                color: #000000;
            }
        
            .service {
                position: absolute;
                width: 45px;
                height: 16px;
                left: 572px;
                top: 30px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                color: #000000;
            }
        
            .success {
                position: absolute;
                width: 122px;
                height: 16px;
                left: 686px;
                top: 30px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                color: #000000;
            }
            
            .insights {
                position: absolute;
                width: 45px;
                height: 16px;
                left: 852px;
                top: 30px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                color: #000000;
            }
        
            .career {
                position: absolute;
                width: 45px;
                height: 16px;
                left: 961px;
                top: 30px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                color: #000000;
            }
        
            .contact {
                position: absolute;
                width: 45px;
                height: 16px;
                left: 1060px;
                top: 30px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                color: #000000;
            }
        
            .quote-button {
                position: absolute;
                width: 122px;
                height: 40px;
                left: 1158px;
                top: 18px;
                background: #184A88;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;     
                border-radius: 2px;
            }
        
            a {
                color: #FFFFFF
                border-radius: 2px;
            }
        
            .button-inner {
                position: absolute;
                width: 90px;
                height: 16px;
                left: 1176px;
                top: 31px;       
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;       
                color: #FFFFFF;
            }
            `}</style>
            </React.Fragment>
        )
    }
}

export default header
