import React from 'react';
import Approach from "../Myconstants/Approach";
import Bigbutton from '../Myconstants/Bigbutton';
import Cart from '../Myconstants/Cart';
import Work from '../Myconstants/Work';
import Space from "../Myconstants/Space";
import Left from "./Left";
import Right from "./Right";
import Java from "../Home/Java";

const Mywork={
  Work:{
  text:"Java Development Service  Java Desktop Application Development Java, Mobile Application Development",
  mylist:"Java Web Services Development Java Application Migration & Integration Java Application Maintenance & Support ",
  myparagraph:"Hire our java developers We do help businesses in integrating your Java applications with databases, operating systems and third-party applications with our java outsourcing company services. We have experience of re-engineering and migration of applications built in Java. This would include technology migration, database migration, Java application upgrade, application porting, etc. Our teamof Java professionals ranked top in providing Java application development services in below:"
  },
  Cart:{
    heading:"Java/Scala Programming" ,
    children:"Java is a programming language and computing platform first released by Sun Microsystems in 1995."
  },
  Bigbutton:{
    label:"View Our JAVA/SCALA Programming Service In Details"
  }
}
const Myservice = () => {
    return (
        <React.Fragment>
          <img src="images/service.jpg" className="backimage2"/>
          <Work  className="outerwrapper"
            myclassname="innerwrapper"
            newclassname="innertext"
            newclass="myclass"
            liststyle="mylist"
            text={<><Space list listitem="Java Development Services"/>
            <Space list listitem="Java Enterprise Application Development "/>
            <Space list listitem="Java Desktop Application Development"/>
            <Space list listitem="Java Mobile Application Development"/></>}
            list={<>
            <Space list listitem="Java Web Services Development"/>
            <Space list listitem="Java Application Migration & Integration "/>
            <Space list listitem=" Java Application Maintenance & Support "/></>}
            paragraph={Mywork.Work.myparagraph}
             />  
          <Cart 
            className="outer_wrap" 
            myclassname="inner_wrap" 
            newclassname="inner_text"
            heading={Mywork.Cart.heading}
            children={Mywork.Cart.children}
           />
          <Bigbutton
            biglabel={Mywork.Bigbutton.label}
            className="outerwrap" 
            myclassName="innerwrap"
          />
          <div className="java-icon"><Java/></div>
           <div className="vector1"><Left/></div>
           <div className="vector2"><Right/></div>

           
          <style jsx>
          {`
        
          .vector1 {
            position: absolute;
            height: 0px;
            left: 480px;
            top: 2800px;;
          }
          .vector2 {
              position: absolute;
              height: 0px;
              left: 570px;
              top: 2800px;
            }
          .java-icon {
                position: absolute;
                width: 173px;
                height: 182px;
                left: 38px;
                top: 2410px;
               
              }    
              .backimage2{
                position: absolute;
                width: 1300px;
                height: 744px;
                left: 0px;
                top: 1962px;
              }   
        `}
        </style>
          </React.Fragment>
    );
};  

export default Myservice;