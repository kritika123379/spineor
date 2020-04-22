
import Button from "../Myconstants/Button";
import Topbanner from "../Myconstants/Topbanner";
import Approach from "../Myconstants/Approach";
import Bigbutton from "../Myconstants/Bigbutton";
import Insights from "./insights";
import Myservice from "./Myservice";
import Testimonial from "./testimonial";
import LetsTalk from "./LetsTalk"

const heading={
  heading : "Design, Develop, Test & Delivered" ,
  paragraph:"Bespoke products & platforms engineered to elevate your customers experience earn their loyalty & grow your business",
  biglabel:"Learn About Our Capabilities & Culture",
  image:"images\africannew.png" 
}
const Home = () => {
  return (
    <React.Fragment>
      <main> 
          <Topbanner
          class="box1" 
          myclass="mytext"
          heading={heading.heading}
          paragraph={heading.paragraph}
          />
           <Button 
          class="outers"
          myclass="inners"
          label="Explore Services"
          />
          <div className="outer_box">
          <Approach 
          className="backimg"
          image={heading.image}
          />
          
         <Bigbutton 
          biglabel={heading.biglabel}
          className="outer"
          myclassName="inner"/>
             </div>
      
      <Myservice/>
      <Insights/>
      <Testimonial/>
  <LetsTalk/>
      </main>
    
    </React.Fragment>
  )
}
export default Home
