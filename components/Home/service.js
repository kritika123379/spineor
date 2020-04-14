import Java from "./Java"
import Left from "./Left"
import Right from "./Right"

const Service = () => {
    return (
        <div>
            <div>
            <img className="service-img" src= "images\service.png"></img>
            <div className= "services">
                Services
            </div>
                <div className="java-img">
                    <div className= "java-icon"><Java/></div>
                    <div className="java-scala">
                        Java/Scala Programming
                    </div>
                    <div className="java-scala-content">
                        Java is a programming language and computing platform first released by Sun Microsystems in 1995.
                    </div>
                    <div className="service-box">
                        <div className="service-content">
                            Hire our java developers We do help businesses in integrating your Java applications with databases, operating systems and third-party applications with our java outsourcing company services. We have experience of re-engineering and migration of applications built in Java. This would include technology migration, database migration, Java application upgrade, application porting, etc.
                            <br />
                            <br />
                        Our team of Java professionals ranked top in providing Java application development services in below:
                        </div>
                    </div>
                </div>
                <div className="vector1"><Left/></div>
                <div className="vector2"><Right/></div>
                <div className="ellipse1"></div>
                <div className="ellipse2"></div>
                <div className="ellipse3"></div>
                <div className="ellipse4"></div>
                <div className="service-points">
                    Java Development Services
                <br />
                Java Enterprise Application Development
                <br />
                Java Desktop Application Development
                <br />
                Java Mobile Application Development
                </div>
                <div className="ellipse5"></div>
                <div className="ellipse6"></div>
                <div className="ellipse7"></div>
                <div className="service-points2">
                    Java Web Services Development
                <br />
                Java Application Migration & Integration
                <br />
                Java Application Maintenance & Support
                </div>
                <div className="service-box2">
                    <div className="service-button">
                        View Our JAVA/SCALA Programming Service In Details
                    </div>
                </div>
            </div>
            <style jsx>{`
    .service-img {
        position: absolute;
        width: 1344px;
        height: 744px;
        left: 0px;
        top: 1962px;
        background-color: gray;
    }
    
    .java-img {
        position: absolute;
        width: 617px;
        height: 399px;
        left: 33px;
        top: 2365px;
        background: #184A88;
    }

    .java-icon {
        position: absolute;
        width: 173px;
        height: 182px;
        left: 32px;
        top: 62px;
    }

    .services {
        position: absolute;
        width: 272px;
        height: 84px;
        left: 92px;
        top: 2032px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 72px;
        line-height: 84px;
        color: rgba(255, 255, 255, 0.8);
    }
    
    .java-scala {
        position: absolute;
        width: 349px;
        height: 113px;
        left: 221px;
        top: 105px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 56px;
        color: #FFFFFF;
    }
    
    .java-scala-content {
        position: absolute;
        width: 525.23px;
        height: 146px;
        left: 64px;
        top: 260px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }
    
    .service-box {
        position: absolute;
        width: 699px;
        height: 676px;
        left: 614px;
        top: -70px;
        background: #FFFFFF;
    }
    
    .service-content {
        position: absolute;
        width: 548px;
        height: 263px;
        left: 73px;
        top: 80px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 157.2%;
        color: #333333;
    }

    .ellipse1 {
        position: absolute;
        width: 13px;
        height: 13px;
        left: 728px;
        top: 2717px;
        background: #8E8E8E;
        border-radius: 50%;
    }

    .ellipse2 {
        position: absolute;
        width: 13px;
        height: 13px;
        left: 728px;
        top: 2743px;
        background: #8E8E8E;
        border-radius: 50%;
    }

    .ellipse3 {
        position: absolute;
        width: 13px;
        height: 13px;
        left: 728px;
        top: 2791px;
        background: #8E8E8E;
        border-radius: 50%;
    }

    .ellipse4 {
        position: absolute;
        width: 13px;
        height: 13px;
        left: 728px;
        top: 2841px;
        background: #8E8E8E;
        border-radius: 50%;
    }

    .service-points {
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

    .service-points2 {
        position: absolute;
        width: 213px;
        height: 206px;
        left: 1017px;
        top: 2710px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 157.2%;
        color: #333333;
    }

    .ellipse5 {
        position: absolute;
        width: 13px;
        height: 13px;
        left: 977px;
        top: 2717px;
        background: #8E8E8E;
        border-radius: 50%;
    }

    .ellipse6 {
        position: absolute;
        width: 13px;
        height: 13px;
        left: 977px;
        top: 2743px;
        background: #8E8E8E;
        border-radius: 50%;
    }

    .ellipse7 {
        position: absolute;
        width: 13px;
        height: 13px;
        left: 977px;
        top: 2791px;
        background: #8E8E8E;
        border-radius: 50%;
    }

    .service-box2 {
        position: absolute;
        width: 457px;
        height: 50px;
        left: 740px;
        top: 2910px;
        background: #FFFFFF;
        border: 2px solid #184A88;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .service-button {
        position: absolute;
        width: 390px;
        height: 19px;
        left: 40px;
        top: 14px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #184A88;
    }

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

    `}</style>
        </div>
    )
}

export default Service