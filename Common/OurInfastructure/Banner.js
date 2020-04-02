import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
            <React.Fragment>
               <div className="inner_header">
               Our Infrastructure
               </div> 
               <div className="inner_text">
               Our benefit is our team of skilled,<br/>
                hard-working and devoted staff <br/>
                working to maintain the<br/>
                 corporate ideals of excellence of<br/>
                  Spineor Conceptions.
               </div>
               <div className="button_outer">
               </div>
               <div className="button-inner">
               Get in touch
               </div>
               <style jsx>{`
               .inner_header{
                position: absolute;
                width: 435px;
                height: 186px;
                left: 111px;
                top: 298px;               
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 70px;
                line-height: 82px;               
                color: #333333;                
               }
               .inner_text{
                position: absolute;
                width: 515px;
                height: 223px;
                left: 656px;
                top: 246px;                
                font-family: Roboto;
                font-style: normal;
                font-weight: 300;
                font-size: 36px;
                line-height: 42px;               
                color: #333333;                
               }
               .button_outer{
                position: absolute;
                width: 158px;
                height: 50px;
                left: 658px;
                top: 488px;
                
                background: #FFFFFF;
                border: 2px solid #184A88;
                box-sizing: border-box;
                border-radius: 4px;
               }
               .button_inner{
                position: absolute;
                width: 86px;
                height: 19px;
                left: 692px;
                top: 503px;
                
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
               `}</style>
            </React.Fragment>
        )
    }
}

export default Banner
