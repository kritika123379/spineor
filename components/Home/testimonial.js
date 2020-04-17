function Image(props){
    return(
        <div>
        <img className={props.myclassName} src= {props.myimage}/>
        </div>
    )
}

const Testimonial = (props) => {
    return(
        <div>
            <main>
            <img className= "world-map" src= "images\testimonial-img.png"/>
                <section className= "vector">
                <Image myclassName="testimonial-img1" myimage="images\person1.jpg" />
                <Image myclassName="testimonial-img2" myimage="images\person4.jpg" />
                <Image myclassName="testimonial-img3" myimage="images\person2.jpg" />
                <Image myclassName="testimonial-img4" myimage="images\person3.jpg" />
                </section>
                <section className= "t-name">
                Sean Devlin
                </section>
                <section className= "t-position">
                Director of an Australian Stealth Startup
                </section>
                <section className= "testimonial-box">
                They've been extremely flexible in their process for delivering our project, just what our startup needed. It has been an extremely positive experience.
                </section>
                <section className= "quote">
                   “ 
                </section>
            </main>
    <style global jsx>{`
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
        opacity: 0.6;
    }

    .testimonial-img3 {
        position: absolute;
        width: 84px;
        height: 90px;
        left: 714px;
        top: 13px;
        border-radius: 50%; 
        opacity: 0.6;  
    }

    .testimonial-img4 {
        position: absolute;
        width: 105px;
        height: 118px;
        left: 1176px;
        top: 152px;
        border-radius: 50%;
        opacity: 0.6;
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