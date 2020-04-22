import React from "react";
import Topbanner from "../../Myconstants/Topbanner";
import Button from "../../Myconstants/Button";
import Java from './icons/Java'

const Top={
    heading:"EXPERIENCE THE BEST JAVA HAS TO OFFER WITH US ",
    paragraph: "At Spineor we possess a highly-skilled team of Java developers that has proven its abilities and competence by delivering world-class Java-based web solutions. Work with us to feel the difference"
}
export default function Mybanner(){
    return(
        <React.Fragment>
        <Topbanner
        class="myhead"
        myclass="stick"
        heading={Top.heading}
        paragraph={Top.paragraph}
        />
        <Button
        class="btnwrap"
        myclass="btninner"
        label="Lets Starts"
        />
        <label><Java/></label>
        
        <style jsx>{`
          label{
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