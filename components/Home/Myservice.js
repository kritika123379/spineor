import React from 'react';
import Approach from "../Myconstants/Approach";
import Bigbutton from '../Myconstants/Bigbutton';
import Cart from '../Myconstants/Cart';
import Work from '../Myconstants/Work';
import Left from "./Left";
import Right from "./Right";
import Java from "../Home/Java";


const Myservice = () => {
    return (
        <React.Fragment>
        <Approach  className="backimage2" image = "images/service.jpg"/>
          <Work  className="outerwrapper"
            myclassname="innerwrapper"
            newclassname="innertext"
            newclass="myclass"
            liststyle="mylist"
            text="Java Development Services Java Enterprise Application Development Java Desktop Application Development Java Mobile Application Development"
            list="Java Web Services Development Java Application Migration & Integration Java Application Maintenance & Support "
            paragraph="Hire our java developers We do help businesses in integrating
            your Java applications with databases, operating systems and third-party applications with our java outsourcing company services. We have experience of re-engineering 
            and migration of applications built in Java. This would include technology migration, database migration, Java application upgrade, application porting, etc. Our team
             of Java professionals ranked top in providing Java application development services in below:"
            
             />  
          <Cart 
            className="outer_wrap" 
            myclassname="inner_wrap" 
            newclassname="inner_text"
            heading="Java/Scala Programming" 
            children="Java is a programming language and computing platform first released by Sun Microsystems in 1995."
           />
          <Bigbutton
            biglabel="View Our JAVA/SCALA Programming Service In Details"
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
        `}
        </style>
          </React.Fragment>
    );
};  

export default Myservice;