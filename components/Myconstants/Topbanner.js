import React from 'react'

function Topbanner(props) {
  return (
    <React.Fragment>
      <main className="wrapper">
      <div className={`header ${props.class}`} style={props.style}>
        {props.heading}
      </div>
      <div className={`text ${props.myclass}`}>
          {props.paragraph}
      </div>
      </main>
      <style jsx>{`
      .wrapper {
        position: absolute;
        width: 1300px;
        height: 630px;
        left: 0px;
        top: 74px;
        background: #ffffff;
      }
        .header {
          position: absolute;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 90px;
          line-height: 105px;   
          color: #333333;
        }
        .box1{
          width: 586px;
          height: 345px;
          left: 85px;
          top: 205px;
        }
        .mybox{
          width: 430px;
          height: 186px;
          left: 111px;
          top: 258px;
        }
      .text {
        position: absolute;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 42px;
        color: #222222;
        }
      .mytext{
        width: 422px;
        height: 266px;
        left: 754px;
        top: 205px;
        }
        .btext{
          width: 515px;
          height: 223px;
          left: 656px;
          top: 246px;
        }
        
      `}</style>
    </React.Fragment>
  );
 }
 export default Topbanner
