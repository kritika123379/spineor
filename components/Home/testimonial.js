const Testimonial = () => {
    return(
        <div>
            <div className= "world-map">
                <div className= "vector">
                <div className= "testimonial-img1"></div>
                <div className= "testimonial-img2"></div>
                <div className= "testimonial-img3"></div>
                <div className= "testimonial-img4"></div>
                </div>
                <div className= "t-name">
                Sean Devlin
                </div>
                <div className= "t-position">
                Director of an Australian Stealth Startup
                </div>
                <div className= "testimonial-box">
                They've been extremely flexible in their process for delivering our project, just what our startup needed. It has been an extremely positive experience.
                </div>
                <div className= "quote">
                   “ 
                </div>
            </div>
    <style jsx>{`
    .world-map {
        position: absolute;
        width: 1344px;
        height: 632px;
        left: 0px;
        top: 4409px;
        background-color: gray;
    }

    .testimonial-box {
        position: absolute;
        width: 631px;
        height: 170px;
        left: 500px;
        top: 435px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
        color: #555555;
    }

    .quote {
        position: absolute;
        width: 162px;
        height: 275px;
        left: 755px;
        top: 378px;
        font-family: Rochester;
        font-style: normal;
        font-weight: normal;
        font-size: 300px;
        line-height: 386px;
        color: rgba(0, 0, 0, 0.1);
        transform: rotate(-169.26deg);
    }

    .t-name {
        position: absolute;
        width: 125px;
        height: 28px;
        left: 500px;
        top: 365px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        color: #222222;
    }

    .t-position {
        position: absolute;
        width: 283px;
        height: 19px;
        left: 500px;
        top: 399px;      
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #555555;
    }

    .testimonial-img1 {
        position: absolute;
        width: 109.35px;
        height: 110.81px;
        left: 255.05px;
        top: 0px;
        background-color: red;
    }

    .testimonial-img2 {
        position: absolute;
        width: 86px;
        height: 106px;
        left: 32px;
        top: 159px;
        background-color: red;
    }

    .testimonial-img3 {
        position: absolute;
        width: 84px;
        height: 90px;
        left: 714px;
        top: 13px;
        background-color: red;
    }

    .testimonial-img4 {
        position: absolute;
        width: 105px;
        height: 118px;
        left: 1176px;
        top: 152px;
        background-color: red;
    }
     
    .vector {
        position: absolute;
        width: 1330px;
        height: 274.09px;
        left: 7px;
        top: 56px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }

    `}</style>
        </div>
    )
}

export default Testimonial