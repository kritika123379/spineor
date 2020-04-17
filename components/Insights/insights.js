import React from "react";
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Robot from "../Myconstants/Robot";
import Smallrobo from "../Myconstants/Smallrobo";
import Speaker from "../Myconstants/Speaker";


const Insights = () => {
    return (
        <section>
            <main>
            <section className="insight-box1"> <Robot image="images\insight1.png"/></section>
            <section className="insight-box2"><Robot image="images\insight2.jpg"/> </section> 
            <section className="insight-box3"><Smallrobo/></section>
            <section className="insight-box4"><Smallrobo/></section>
            <section className="insight-box5"><Smallrobo/></section>
            <section className="insight-box6"><Robot image="images\insight1.png"/></section>
            <section className="insight-box7"><Robot image=" images\insight2.jpg"/></section>
            <section className="insight-box8"><Smallrobo/></section>
            <section className="insight-box9"><Smallrobo/></section>
            <section className="insight-box10"><Smallrobo/></section>
            </main>
            <style jsx>{`
    .insight-box1 {
        width: 619px;
        height: 447px;
        left: 20px;
        top: 108px;
        position: absolute; 
        background: #F0F0F0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    }
    .insight-box2 {
        position: absolute;
        width: 619px;
        height: 447px;
        left: 661px;
        top: 108px;
        background: #F0F0F0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    }
    .insight-box3{
        position: absolute;
        width: 403px;
        height: 365px;
        left: 20px;
        top: 663px;
        background: #F0F0F0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    }
    .insight-box4 {
        position: absolute;
        width: 403px;
        height: 365px;
        left: 449px;
        top: 663px;    
        background: #F0F0F0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    }
    .insight-box5 {
        position: absolute;
        width: 403px;
        height: 365px;
        left: 878px;
        top: 663px;
        background: #F0F0F0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    }
    .insight-box6 {
        position: absolute;
        width: 619px;
        height: 447px;
        left: 21px;
        top: 1126px;   
        background: #F0F0F0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    }
    .insight-box7 {
        position: absolute;
        width: 619px;
        height: 447px;
        left: 662px;
        top: 1126px;
        background: #F0F0F0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    }
    .insight-box8 {
        position: absolute;
        width: 403px;
        height: 365px;
        left: 20px;
        top: 1683px;
        background: #F0F0F0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    }
    .insight-box9 {
        position: absolute;
        width: 403px;
        height: 365px;
        left: 449px;
        top: 1683px;  
        background: #F0F0F0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    }
    .insight-box10 {
        position: absolute;
        width: 403px;
        height: 365px; 
        left: 878px;
        top: 1683px;
        background: #F0F0F0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15); 
    }
    
    `}</style>
      
        </section>
    )
}
export default Insights