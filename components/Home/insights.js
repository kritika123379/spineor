import Head from "next/head";
import Left from "./Left";
import Right from "./Right";

const Insights = () => {

    return (
        <div>
            <div>
            <img className="insights-img" src= "images\insights.jpg"></img>
            <div className="insights">
                Insights
            </div>
                <div className="box2">
                    <div>
                    <img className="AI-header1" src= "images\insignts-img.png"/>
                        <div className= "box3">
                            <div className= "box4">
                            The Role Of Artificial Intelligence In Web Development
                            </div>
                            <div className= "box5">
                            Nowadays, Web development is growing at a rapid rate with a focus on enhancing user experience. We know that these days most people use mobile through access the web. Which indicates that websites with enhanced UI will remain at the...
                            </div>
                        </div>
                    </div>
                </div>
                <div className= "vector1"><Left/></div>
                <div className= "vector2"><Right/></div>
                <div className="box6">
                    <div>
                    <img className="AI-header2" src= "images\insights-img2.jpg"/>
                        <div className= "box7">
                            <div className= "box8">
                            Python In the Field of ML and AI
                            </div>
                            <div className= "box9">
                            Python language is one of the most popular programming languages in the world with its applications ranging from web development to scripting and process automation, Python is among one of the top choices among...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className= "box10">
            Trusted by the world's leading 
            <br/>
            <strong>Startups and Enterprises</strong> since 2012.
            </div>
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
            `}
            </style>
        </div>
    )
}
export default Insights