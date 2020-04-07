import Youtube from "./Youtube"

import Layout from "../Layout"
import Header from "../Header/header"
import Footer from "../Footer/footer"

const Success = () => {
    return (
        <Layout>
            <Header/>
            <div className="success">
                <div className="success-stories">
                    Success Stories
                 </div>
                <div className="success-content">
                    We have built high impact solutions across Industries. Have a look! We’ve handpicked some our finest work for you to view
                 </div>
                <button>Get in touch</button>
            </div>
            <div>
            <img className="trello-logo1" src= "images\trello-logo.png"></img>
            </div>
            <div className="out-link">
                <Outlink/>
            </div>
            <div className="trello-content1">
                Trello is the easy, free, flexible, and visual way to manage your projects and organize anything, trusted by millions of people from all over the world.
                </div>
            <div >
            <img className="node-logo" src= "images\node-logo.png"></img>
            </div>
            <div >
            <img className="react-logo" src= "images\react-logo.png"></img>
            </div>
            <div >
            <img className="mongo-logo" src= "images\mongodb-logo.png"></img>
            </div>
            <div className="youtube-link1">
                <div className="youtube-logo1">
                    <Youtube/>
                </div>
            </div>
            <div className="youtube-link2">
                <div className="youtube-logo2">
                <Youtube/>
                </div>
            </div>
            <div>
            <img className="trello-logo2" src= "images\trello-logo.png"></img>
            </div>
            <div className="out-link1">
                <Outlink/>
            </div>
            <div className="trello-content2">
                Trello is the easy, free, flexible, and visual way to manage your projects and organize anything, trusted by millions of people from all over the world.
                </div>
            <div>
            <img className="node-logo1" src= "images\node-logo.png"></img>
            </div>
            <div>
            <img className="react-logo1" src= "images\react-logo.png"></img>
            </div>
            <div>
            <img className="mongo-logo1" src= "images\mongodb-logo.png"></img>
            </div>
            
            <style jsx>{`
    
    .success {
        position: absolute;
        width: 1340px;
        height: 630px;
        left: 0px;
        top: 0px;
        background: #FFFFFF;
    }

    .success-stories {
        position: absolute;
        width: 435px;
        height: 277px;
        left: 111px;
        top: 185px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 90px;
        line-height: 105px;
        color: #333333;
    }

    @media (min-width: 1024px) and (max-width: 1024px) {
        .out-link {
            position: absolute;
            left: 37%;
            right: 59%;
            top: 54%;
        }
    }
    .out-link {
        position: absolute;
        left: 28%;
        right: 69%;
        top: 111%;
    }

    .out-link1 {
        position: absolute;
        left: 93%;
        right: 4%;
        top: 190%;
    }

    .success-content {
        position: absolute;
        width: 515px;
        height: 223px;
        left: 656px;
        top: 190px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 42px;
        color: #333333;
    }

    button {
        position: absolute;
        width: 158px;
        height: 50px;
        left: 650px;
        top: 416px;
        background: #FFFFFF;
        border: 2px solid #184A88;
        box-sizing: border-box;
        border-radius: 4px;
        align-items: center;
        text-align: center;
        color: #184A88;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal
    }
    .trello-logo1 {
        position: absolute;
        width: 261px;
        height: 63px;
        left: 6px;
        top: 743px;
    }

    .trello-content1 {
        position: absolute;
        width: 360px;
        height: 287px;
        left: 20px;
        top: 835px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 35px;
        color: #000000;
    }

    .node-logo {
        position: absolute;
        width: 85px;
        height: 85px;
        left: 21px;
        top: 1093px;
    }

    .react-logo {
        position: absolute;
        width: 104px;
        height: 35px;
        left: 124px;
        top: 1115px;
    }

    .mongo-logo {
        position: absolute;
        width: 135px;
        height: 37px;
        left: 246px;
        top: 1113px;
    }

    .youtube-link1 {
        position: absolute;
        width: 880px;
        height: 480px;
        left: 455px;
        top: 706px;
        background: rgba(0, 0, 0, 0.48);
    }

    .youtube-logo1 {
        position: absolute;
        left: 42%;
        right: 42%;
        top: 35%;
        
    }

    .youtube-logo2 {
        position: absolute;
        left: 42%;
        right: 41%;
        top: 36%;
        
    }

    .youtube-link2 {
        position: absolute;
        width: 880px;
        height: 480px;
        left: 0px;
        top: 1236px;
        background: rgba(0, 0, 0, 0.48);
    }

    .trello-logo2 {
        position: absolute;
        width: 261px;
        height: 63px;
        left: 930px;
        top: 1273px;

    }

    .trello-content2 {
        position: absolute;
        width: 360px;
        height: 287px;
        left: 930px;
        top: 1365px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 35px;
        color: #000000;
    }

    .node-logo1 {
        position: absolute;
        width: 85px;
        height: 85px;
        left: 930px;
        top: 1623px;
    }

    .react-logo1 {
        position: absolute;
        width: 104px;
        height: 35px;
        left: 1033px;
        top: 1645px;
    }

    .mongo-logo1 {
        position: absolute;
        width: 135px;
        height: 37px;
        left: 1155px;
        top: 1643px;
    }
    `}</style>
  
        <Footer/>
        </Layout>
    )
}
export default Success