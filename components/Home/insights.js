import Head from "next/head";
import Left from "./Left";
import Right from "./Right";
import Card from "../Myconstants/Card";

const Mycard={
    card1:{
    heading:"The Role Of Artificial Intelligence In Web Development",
    subheading:" Nowadays, Web development is growing at a rapid rate with a focus on enhancing user experience. We know that these days most people use mobile through access the web. Which indicates that websites with enhanced UI will remain at the...",
    },
    card2:{
        heading:" Python In the Field of ML and AI",
        subheading:" Python language is one of the most popular programming languages in the world with its applications ranging from web development to scripting and process automation, Python is among one of the top choices among..."
    }
}
const Insights = () => {
    return (
        <div>
            <main>
                    <img className="insights-img" src= "images\insights.jpg"></img>
                    <section className="insights">
                        Insights
                    </section>
                    <section className="box2">
                    <Card 
                     heading={Mycard.card1.heading}
                     subheading={Mycard.card1.subheading}
                    image="images\insignts-img.png"
                    />
                    </section>
                    <section className= "vector1"><Left/></section>
                    <section className= "vector2"><Right/></section>
                    <section className="box6">
                    <Card 
                    heading={Mycard.card2.heading}
                    subheading={Mycard.card2.subheading}
                    image="images\insights-img2.jpg"
                    /> 
                    </section>
                    </main>
                    <section className= "box10">
                    Trusted by the world's leading 
                    <br/>
                    <strong>Startups and Enterprises</strong> since 2012.
                    </section>
            <style jsx>{`
            .insights-img {
                position: absolute;
                width: 1344px;
                height: 677px;
                left: 0px;
                top: 3081px;
            }
            .insights {
                position: absolute;
                width: 255px;
                height: 84px;
                left: 89px;
                top: 3165px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 72px;
                line-height: 84px;
                color: rgba(255, 255, 255, 0.8);
            }
            .box2 {
                position: absolute;
                width: 500px;
                height: 580px;
                left: 94px;
                top: 3475px;
                background: #FFFFFF;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
            }
            .AI-header1 {
                position: absolute;
                width: 500px;
                height: 283px;
                left: 0px;
                top: 0px;
            }
            .box3 {
                position: absolute;
                width: 427px;
                height: 117px;
                left: 35px;
                top: 207px;
                background: #FFFFFF;
            }

            .box4 {
                position: absolute;
                width: 339px;
                height: 117px;
                left: 25px;
                top: 8px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 32px;
                line-height: 37px;
                color: #222222;
            }

            .box5 {
                position: absolute;
                width: 374px;
                height: 146px;
                left: 30px;
                top: 166px;
                font-family: Roboto;
                font-style: normal;
                font-weight: 300;
                font-size: 18px;
                line-height: 157.2%;
                color: #333333;
            }

            .box6 {
                position: absolute;
                width: 500px;
                height: 580px;
                left: 741px;
                top: 3475px;
                background: #FFFFFF;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
            }
            .AI-header2 {
                position: absolute;
                width: 500px;
                height: 283px;
                left: 0px;
                top: 0px;
            }
            .box7 {
                position: absolute;
                width: 427px;
                height: 117px;
                left: 37px;
                top: 207px;
                background: #FFFFFF;
            }

            .box8 {
                position: absolute;
                width: 339px;
                height: 117px;
                left: 22px;
                top: 8px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 32px;
                line-height: 37px;
                color: #222222;
            }

            .box9 {
                position: absolute;
                width: 374px;
                height: 146px;
                left: 9px;
                top: 166px;
                font-family: Roboto;
                font-style: normal;
                font-weight: 300;
                font-size: 18px;
                line-height: 157.2%;
                color: #333333;
            }

            .vector1 {
                position: absolute;
                width: 41px;
                height: 55px;
                left: 595px;
                top: 3810px;
            }

            .vector2 {
                position: absolute;
                width: 41px;
                height: 55px;
                left: 670px;
                top: 3875px;
            }

            .box10 {
                position: absolute;
                width: 925px;
                height: 119px;
                left: 93px;
                top: 4270px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 46px;
                line-height: 49px;
                color: #000000;
            }
            strong {
                color: blue;
            }
            @media screen and (max-width: 600px) {
               .insights-img{
                position: absolute;
                width: 360px;
                height: 223px;
                left: 0px;
                top: 2360px;
                background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);

               }
               .insights{
                position: absolute;
                width: 128px;
                height: 42px;
                left: 116px;
                top: 2374px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 36px;
                line-height: 42px;          
                color: rgba(255, 255, 255, 0.8);
               }
               .box2{
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
                width: 320px;
                height: 545px;
                left: 18px;
                top: 2588px;
              }
              .box10{
                position: absolute;
                width: 307px;
                height: 76px;
                left: 42px;
                top: 3240px;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;                
                color: #000000;
              }
              .vector1{
                left: 39%;
                right: 25%;
                top: 3154px;
                bottom: 0%;
                position:absolute;
             
              }
              .vector2{
                position: absolute;
                left: 50%;
                right: -25%;
                top: 426%;
                bottom: -100%;
              }
              .box6{
                  display:none;
              }
            `}
            </style>
        </div>
    )
}
export default Insights


