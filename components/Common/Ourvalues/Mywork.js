import Smallimage from "../../Myconstants/Smallimage";
import Smallheading from "../../Myconstants/Smallheading";
import Stepbutton from "../../Myconstants/Stepbutton";
import Steptext from "../../Myconstants/Steptext";


const dummytext={
    dummytext:" Every Spineor member is component of a single team. It's no secret that there are two heads better than one and we value community at Spineor. A project is most effective if it has the complete Spineor team's mixed understanding, abilities, and creativity."
}
export default function Mywork(){
return(
    <div>
    <Smallimage   classes="position" imagesrc="images\work.png"/>  
    <Smallheading  nonsticky="place" notify="Let’s Work Together" />
    <Stepbutton  newsection="mysection" Number="1"/>  
    <Steptext important="imp"
        dummytext={dummytext.dummytext}
    />
    </div>
)
}