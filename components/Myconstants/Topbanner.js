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
        .myhead{
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
        }
        .stick{
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
        }
        @media screen and (max-width: 630px) {
          .wrapper{
              display: grid;
              grid-template-columns: 16fr 4fr ;
              grid-row-gap: 2rem;
            
          }
          .wrapper > div{
          background-color:#AFBAC5/*(grey)*/
          position: absolute;
            width: 268px;
            height: 227px;
            left: 40px;
            top: 218px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            color: #222222;
    
          }
          .wrapper > div :nth-child(odd){
           background-color:#79A0C6 /*(blue)*/
           position: absolute;
            width: 254px;   
            height: 141px;
            left: 40px;
            top: 79px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 42px;
            text-align: center;
            color: #333333;
          }

        }
      `}</style>
    </React.Fragment>
  );
 }
 export default Topbanner
