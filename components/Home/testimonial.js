const Testimonial = () => {
    return(
        <div>
            <div >
            <img className= "world-map" src= "images\testimonial-img.png"/>
                <div className= "vector">
                <div>
                <img className= "testimonial-img1" src= "images\person1.jpg"/>
                </div>
                <div>
                <img className= "testimonial-img2" src= "images\person2.jpg"/>
                </div>
                <div>
                <img className= "testimonial-img3" src= "images\person3.jpg"/>
                </div>
                <div>
                <img className= "testimonial-img4" src= "images\person4.jpg"/>
                </div>
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
        opacity: 0.2;
    }

    .testimonial-box {
        position: absolute;
        width: 631px;
        height: 170px;
        left: 500px;
        top: 4759px;
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
        top: 4709px;
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
        top: 4672px;
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
        top: 4710px;      
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
        border-radius: 50%;
    }

    .testimonial-img2 {
        position: absolute;
        width: 86px;
        height: 106px;
        left: 32px;
        top: 159px;
        border-radius: 50%;
        opacity: 0.2;
    }

    .testimonial-img3 {
        position: absolute;
        width: 84px;
        height: 90px;
        left: 714px;
        top: 13px;
        border-radius: 50%; 
        opacity: 0.2;  
    }

    .testimonial-img4 {
        position: absolute;
        width: 105px;
        height: 118px;
        left: 1176px;
        top: 152px;
        border-radius: 50%;
        opacity: 0.2;
    }
     
    .vector {
        position: absolute;
        width: 1330px;
        height: 274.09px;
        left: 7px;
        top: 4420px;
    }

    `}</style>
        </div>
    )
}

export default Testimonial