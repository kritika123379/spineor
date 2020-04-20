import Head from 'next/head'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
            <img className="navbar-brand" src="\images\spineor-logo.webp"></img>
            <button className="btnn" type="submit">GET A QUOTE</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr">
                    <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ABOUT<span className= "fa fa-angle-down"></span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <p className= "p" href="#">Who We Are</p>
                                <p className= "p" href="#">Our Infrastructure</p>
                                <p className= "p" href="#">Our Values</p>
                                <p className= "p" href="#">Event & Celebrations</p>
                                <p className= "p" href="#">FAQ</p>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SERVICES<span className= "fa fa-angle-down"></span>
                            </a>
                            <div className="dropdown-menu" id="box" aria-labelledby="navbarDropdown">
                                <div className= "box1">
                                <h4>Website Development</h4>
                                <p>Full Stack Development</p>
                                <p>Mean Stack Development</p>
                                <p>PHP Development</p>
                                <p>.NET Development</p>
                                </div>
                                <div className= "box2">
                                <h4>E-Commerce Web Development</h4>
                                <p>Magento Development</p>
                                <p>WooCommerce Development</p>
                                <p>Shopify Development</p>
                                </div>
                                <div className= "box3">
                                <h4>Digital Marketing</h4>
                                <p>SEO Marketing</p>
                                <p>SMM Marketing</p>
                                <p>PPC Marketing</p>
                                <p>Google Analytics</p>
                                </div>
                                <div className= "box4">
                                <h4>JAVA Development</h4>
                                <p>Full Stack Development</p>
                                <p>Mean Stack Development</p>
                                <p>PHP Development</p>
                                <p>.NET Development</p>
                                </div>
                                <div className= "box5">
                                <h4>Web and Graphics Design</h4>
                                <p>Full Stack Development</p>
                                <p>Mean Stack Development</p>
                                <p>PHP Development</p>
                                </div>
                                <div className= "box6">
                                <h4>CMS Development</h4>
                                <p>Full Stack Development</p>
                                <p>Mean Stack Development</p>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SUCCESS STORIES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">INSIGHT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CAREER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                    </ul>
                        <button className="btn" type="submit">GET A QUOTE</button>
                </div>
            </nav>
    <style jsx>{`

    .p {
        color: white;
        margin-left: 10px;
    }

    #box {
        width: 1300px;
        height: 570px;
        left: -600px;
        top: 50px;
        background: #184A88;
    }

    .box1 {
        position: absolute;
        width: 242px;
        height: 28px;
        left: 100px;
        top: 50px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }

    .box2 {
        position: absolute;
        width: 342px;
        height: 28px;
        left: 550px;
        top: 50px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;    
        color: #FFFFFF;
    }

    .box3 {
        position: absolute;
        width: 186px;
        height: 28px;
        left: 1024px;
        top: 50px;  
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;  
        color: #FFFFFF;
    }

    .box4 {
        position: absolute;
        width: 214px;
        height: 28px;
        left: 100px;
        top: 325px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px; 
        color: #FFFFFF;
    }

    .box5 {
        position: absolute;
        width: 276px;
        height: 28px;
        left: 550px;
        top: 325px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }

    .box6 {
        position: absolute;
        width: 200px;
        height: 28px;
        left: 1024px;
        top: 325px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }

    p {
        font-size: 15px;
        font-weight: normal;
    }

    .dropdown-menu {
        background-color: #184A88;
    }

    // .dropdown-item   {
    //     color: #FFFFFF;
    // }

    .navbar-brand {
        width: 120px;
    }

    .nav-link {
        margin-left: 10px
    }

    .btn {
        background-color: #184A88;
        color: #FFFFFF;
        margin-left: 20px;
        margin-top: -4px
    }

    .mr  {
        margin-left: 400px
    }

    a {
        font-family: Robot;
        font-style: normal;
        color: #000000;
    }

    nav {
        background-color: #FFFFFF;
    } 

    .navbar-light .navbar-nav .nav-link {
        color: Black;
    }

    .btnn {
        display: none;
    }

    .fa {
        display: none;
    }

    @media only screen and (max-width: 1224px) {
        #box {
            width: 1224px;
            height: 561px;
            left: -652px;
            top: 50px;
            background: #184A88;
        }
    }

    @media screen and (max-width: 994px) {

        #box {
            width: auto;
            height: 1166px;
            left: -610px;
            top: 50px;
            background: #184A88;
        }

        .box1 {
            position: absolute;
            width: 242px;
            height: 28px;
            left: 20px;
            top: 50px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 28px;
            color: #FFFFFF;
        }

        .box2 {
            position: absolute;
            width: 342px;
            height: 71px;
            left: 20px;
            top: 275px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 28px;
            color: #FFFFFF;
        }

        .box3 {
            position: absolute;
            width: 186px;
            height: 28px;
            left: 20px;
            top: 447px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 28px;
            color: #FFFFFF;
        }

        .box4 {
            position: absolute;
            width: 214px;
            height: 28px;
            left: 20px;
            top: 672px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 28px;
            color: #FFFFFF;
        }

        .box5 {
            position: absolute;
            width: 276px;
            height: 28px;
            left: 20px;
            top: 900px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 28px;
            color: #FFFFFF;
        }

        .box6 {
            position: absolute;
            width: 200px;
            height: 28px;
            left: 20px;
            top: 1079px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 28px;
            color: #FFFFFF;
        }

        .mr {
            margin-left: 0px
        } 

        .quote {
            display: flex;
            
        }

        // @media only screen and (max-width: 768px) {
        //     .btnn {
        //         display: block;
        //         background-color: #184A88;
        //         color: #FFFFFF;
        //         font-size: 14px;
        //         height: 34px;
        //         margin-left: 35px;
        //     }
        // }

        .btnn {
            display: block;
            background-color: #184A88;
            color: #FFFFFF;
            font-size: 14px;
            height: 34px;
            margin-left: 35px;
        }

        .btn {
            display: none;
        }

        .navbar-collapse {
            background-color: #184A88;        
        }

        .navbar {
            padding: 0.2rem 0.2rem;
        }

        .fa-angle-down {
            float: right;
            margin-right: 11px;
        }

        .fa {
            display: inline-block;
            font: normal normal normal 14px/1 FontAwesome;
            font-size: 20px;
            color: white;
            text-rendering: auto;
        }

        .navbar-light .navbar-nav .nav-link {
            color: white;
        }
    
    `}</style>
        </div>
    )
}
export default Navbar
