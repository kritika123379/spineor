
import Button from "../Myconstants/Button";
import Topbanner from "../Myconstants/Topbanner";
import Approach from "../Myconstants/Approach";
import Bigbutton from "../Myconstants/Bigbutton";
import Insights from "./insights";
import Myservice from "./Myservice";
import Testimonial from "./testimonial";
import LetsTalk from "./LetsTalk"


const Home = () => {
  return (
    <div>
      <main className="box"> 
          <Topbanner 
          heading="Design, Develop, Test & Delivered" 
          paragraph="Bespoke products & platforms engineered to elevate your customers' experience,
          earn their loyalty & grow your business"
          />
          <Button 
          label="Explore Services"
          />
          <div className="outer_box">
          <Approach 
          className="backimg"
          image="images\africannew.png"
          />
          <Bigbutton 
          biglabel="Learn About Our Capabilities & Culture" 
          className="outer"
          myclassName="inner"/>
        </div>
      </main>
      <Myservice/>
      <Insights/>
      <Testimonial/>
      <LetsTalk/>
      <style jsx>{`
   
  .box {
    position: absolute;
    width: 1340px;
    height: 630px;
    top: 73px;
    background: #ffffff;
  }
  `}</style>
    </div>
  )
}
export default Home;