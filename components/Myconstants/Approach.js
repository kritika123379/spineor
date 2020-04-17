import Cart from "./Cart";
import Work from "./Work";


function Approach(props) {
    return (
        <div>
        <img className={props.className} src= {props.image}/>
        <Work 
        className="outwrap" 
        myclassname="innerwrap"
        paragraph="There are consultancies that focus on UX and UI. There are developers that design and build.
        We deliver the best of all worlds with our agile, end-to-end process. We get rid of your digital development headaches by maximizing efficiencies to deliver transformative solutions that delight users and drive revenue.
       Our mission is to help clients from startup to enterprise optimize their online businesses for unstoppable growth." />
     
       <Cart 
        className="outers"
        myclassname="inners" 
        newclassname="small_inner" 
        heading="A PEOPLE-FIRST APPROACH"
        children="Custom Digital Products & Platforms Created by People, for People.
          Transform your business with our user-centric approach."/> 
      
      <style jsx>{`
      
.backimg {
    position: absolute;
    left: 0px;
    top: 791px;
    width: 1300px;
    height: 859px;
  }
  .backimage2{
    position: absolute;
    width: 1300px;
    height: 744px;
    left: 0px;
    top: 1962px;
  }
 
      `}</style>
        </div>
    );
   }

   export default Approach