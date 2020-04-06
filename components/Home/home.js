import Service from "./service";
import Insights from "./insights";
import Testimonial from "./testimonial";
import LetsTalk from "./letstalk";

const Home = () => {
  return (
    <div>

      <div className="box">
        <div className="box1">
          Design, Develop, Test & Delivered.
        </div>
        <div className="box2">
          Bespoke products & platforms engineered to elevate your customers' experience, earn their loyalty & grow your business.
        </div>
        <div className="box3">
          <div className="box4">
            Explore Services
        </div>
        </div>

        <div className="backimg">
          <div className="box5">
            <div className="box6">
              A PEOPLE-FIRST APPROACH
        </div>
            <div className="box7">
              Custom Digital Products & Platforms Created by People, for People. Transform your business with our user-centric approach.
        </div>
          </div>
          <div className="box8">
            <div className="box9">
              There are consultancies that focus on UX and UI. There are developers that design and build.
          <br />
              <br />
          We deliver the best of all worlds with our agile, end-to-end process. We get rid of your digital development headaches by maximizing efficiencies to deliver transformative solutions that delight users and drive revenue.
          <br />
              <br />
          Our mission is to help clients from startup to enterprise optimize their online businesses for unstoppable growth.
          </div>
          </div>
          <div className="box10">
            <div className="box11">
              Learn About Our Capabilities & Culture
            </div>
          </div>
        </div>
      </div>
      <Service/>
      <Insights/>
      <Testimonial/>
      <LetsTalk/>

      <style jsx>{`
  .box {
    position: absolute;
    width: 1340px;
    height: 630px;
    top: 73px;
    background: #FFFFFF;
  }
  .box1 {
    position: absolute;
    width: 586px;
    height: 345px;
    left: 85px;
    top: 205px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 90px;
    line-height: 105px;   
    color: #333333;
  }
.box2 {
    position: absolute;
    width: 411px;
    height: 266px;
    left: 754px;
    top: 205px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;
    color: #222222;
  }

.box3 {
    position: absolute;
    width: 194px;
    height: 50px;
    left: 756px;
    top: 504px;
    background: #FFFFFF;
    border: 2px solid #184A88;
    box-sizing: border-box;
    border-radius: 4px;
} 

.box4 {
    position: absolute;
    width: 118px;
    height: 19px;
    left: 39px;
    top: 13px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #184A88;
}

.backimg {
    position: absolute;
    width: 1340px;
    height: 859px;
    left: 0px;
    top: 791px;
    background-color: gray;
    
  }

.box5 {
    position: absolute;
    width: 617px;
    height: 399px;
    left: 33px;
    top: 460px;
    background: #184A88;
}  

.box6 {
    position: absolute;
    width: 540.85px;
    height: 113px;
    left: 37px;
    top: 67px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #FFFFFF;
}

.box7 {
    position: absolute;
    width: 525.23px;
    height: 146px;
    left: 41.03px;
    top: 211px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}

.box8 {
    position: absolute;
    width: 690px;
    height: 243px;
    left: 650px;
    top: 616px;
    background: #FFFFFF;
}

.box9 {
    position: absolute;
    width: 567px;
    height: 287px;
    left: 50px;
    top: 91px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
}

.box10 {
    position: absolute;
    width: 345px;
    height: 50px;
    left: 692px;
    top: 950px;
    background: #FFFFFF;
    border: 2px solid #184A88;
    box-sizing: border-box;
    border-radius: 4px;
}

.box11 {
    position: absolute;
    width: 272px;
    height: 19px;
    left: 43px;
    top: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #184A88;
}

  `}</style>
    </div>
  )
}
export default Home;