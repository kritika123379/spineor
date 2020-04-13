import React, { Component } from 'react'
import Java from './icons/Java'

class Topbanner extends Component {
    render() {
        return (
            <React.Fragment>
               <div className="outer_wrapper">
               </div>
               <div className="heading_wrapper">
               EXPERIENCE THE BEST JAVA HAS TO OFFER WITH US 
               </div>
               <div className="heading_text">
               At Spineor we possess a <br/>
               highly-skilled team of Java<br/>
                developers that has proven its<br/>
                 abilities and competence by <br/>
                 delivering world-class<br/>
                  Java-based web solutions. Work<br/>
                   with us to feel the difference!
               </div>
               <div className="button_wrapper">
               </div>
               <div className="button_inner">
               Lets Starts 
               </div>
               <div className="java_wrapper">
               <div className="java">
               hello
               </div>
               </div>
               <div className="java_icon">
               <Java/>
               </div>
             
               <style jsx>{`
               .java_icon{
                position: absolute;
                width: 564px;
                height: 507px;
                left: -291px;
                top: 174px;
                z-index:-1      
               }
               .new_icon{
                position: absolute;
                left: 12.92%;
                right: 12.92%;
                top: 0%;
                bottom: 0%;   
               }
               .outer_wrapper{
                position: absolute;
                width: 1300px;
                height: 630px;
                left: 0px;
                top: 74px; 
                z-index: -1;
                background: #ffffff;
          
               }
               .heading_wrapper{
                position: absolute;
                width: 435px;
                height: 277px;
                left: 126px;
                top: 253px;               
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 56px;
                line-height: 66px;               
                color: #333333;
                z-index: -1;
               }
               .heading_text{
                position: absolute;
                width: 515px;
                height: 291px;
                left: 650px;
                top: 218px;                
                font-family: Roboto;
                font-style: normal;
                font-weight: 300;
                font-size: 36px;
                line-height: 42px;                
                color: #333333; 
                z-index: -1;
               }
               .button_wrapper{
                position: absolute;
                width: 158px;
                height: 50px;
                left: 650px;
                top: 554px;                
                background: #ffffff;
                border: 2px solid #184A88;
                box-sizing: border-box;
                border-radius: 4px;
                z-index: -1;
               }
               .button_inner{
                position: absolute;
                width: 78px;
                height: 19px;
                left: 688px;
                top: 569px;  
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 19px; 
                display: flex;
                align-items: center;
                text-align: center;  
                color: #184A88;
            
               }
               .java{
                     position: absolute;
                    left: 12.92%;
                    right: 12.92%;
                    top: 0%;
                    bottom: 0%;                        
               }
               .java_wrapper{
                position: absolute;
                width: 564px;
                height: 507px;
                left: -291px;
                top: 174px;
               }
               `}</style>
            </React.Fragment>
        )
    }
}

export default Topbanner
