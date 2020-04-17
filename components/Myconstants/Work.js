import React from "react";
import Ellipse from "./Ellipse";

function Work(props){
    return(
        <React.Fragment>
        <section className={`out ${props.className}`}>
        <section className={`inner ${props.myclassname}`}> 
          {props.paragraph}
          </section>
          <section className={props.newclass}>{props.text}</section>
        </section>
        <Ellipse className="ellipse1"/>
        <Ellipse className="ellipse2"/>
        <Ellipse className="ellipse3"/>
        <Ellipse className="ellipse4"/>
        <section  className={props.liststyle}>{props.list}</section>
        <Ellipse className="ellipse5"/>
        <Ellipse className="ellipse6"/>
        <Ellipse className="ellipse7"/>
        <style jsx>{`   
        .outwrap{
            position: absolute;
            width: 690px;
            height: 243px;
            left: 650px;
            top: 1409px;
            background: #FFFFFF;
          }        
          .innerwrap {
            position: absolute;
            width: 567px;
            height: 287px;
            left: 50px;
            top: 91px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 21px;
            color: #333333;
            
          }
          .outerwrapper{
            position: absolute;
            width: 650px;
            height: 676px;
            left: 650px;
            top: 2290px;
            background: #FFFFFF;

          }
          .innerwrapper{
            padding:40px 
          }
          .innertext{ 
            position: absolute;
            width: 213px;
            height: 206px;
            left: 770px;
            top: 2710px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 157.2%;
            color: #333333;
          }
          .myclass{
            padding-left:60px;
            width: 213px;
            height: 206px;
            left: 738px;
            top: 2646px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 157.2%;
            color: #333333;
          }   
          .mylist{
            position: absolute;
            width: 213px;
            height: 206px;
            left: 1017px;
            top: 2543px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 157.2%;
            color: #333333
          }  

            `}</style>
        </React.Fragment>
    )
}
export default Work