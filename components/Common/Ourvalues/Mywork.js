import Smallimage from "../../Myconstants/Smallimage";
import Smallheading from "../../Myconstants/Smallheading";
import Stepbutton from "../../Myconstants/Stepbutton";
import Steptext from "../../Myconstants/Steptext";


const dummytext={
    dummytext:" Every Spineor member is component of a single team. It's no secret that there are two heads better than one and we value community at Spineor. A project is most effective if it has the complete Spineor team's mixed understanding, abilities, and creativity.",
    dummytext1:" We're in the creativity company and your creativity comes from whom you come from. You're never going to be criticized for your thoughts at Spineor. Do not be scared to ask questions or talk up. You are bringing to the table your own ideas and individuality. ",
    dummytext2:"Time is worthwhile. It's important for our Spineor team and useful for our customers. We are building instruments at Spineor to speed up procedures. Find a complex issue and make it easy. You don't have to work long, you just need to work intelligent.",
    dummytext3:"We're in the creativity company and your creativity comes from whom you come from. You're never going to be criticized for your thoughts at Spineor. Do not be scared to ask questions or talk up. You are bringing to the table your own ideas and individuality",
    dummytext4:" Confucius said it best, Choose a job you love, and you're never going to have to work a day in your lives. We want every Spineor member to love their job. Creativity is supposed to be enjoyable, so have fun!"
}
export default function Mywork(){
return(
    <div>
    <Smallimage   classes="position" imagesrc="images\work.png"/>  
    <Smallheading  nonsticky="place" notify="Let’s Work Together" />
    <Stepbutton wrapper="wrapper"  newsection="mysection" Number="1"/>  
    <Steptext important="imp"
        dummytext={dummytext.dummytext}
    />
    <Smallimage   classes="position1" imagesrc="images\laptop.png"/> 
    <Smallheading  nonsticky="place1" notify="Be Yourself" />
    <Stepbutton wrapper="wrapper1" newsection="mysection1" Number="2"/> 
    <Steptext important="imp1"
    dummytext={dummytext.dummytext1}
    />
    <Smallimage   classes="position2" imagesrc="images\man.png"/> 
    <Smallheading  nonsticky="place2" notify=" Work Smart" />
    <Stepbutton wrapper="wrapper2" newsection="mysection2" Number="3"/> 
    <Steptext important="imp2"
    dummytext={dummytext.dummytext2}
    />
    <Smallimage   classes="position3" imagesrc="images\cartoon.png"/> 
    <Smallheading  nonsticky="place3" notify="Customer Focused" />
    <Stepbutton  wrapper="wrapper3"  newsection="mysection2" Number="4"/> 
    <Steptext important="imp3"
    dummytext={dummytext.dummytext3}
    />
    <Smallimage   classes="position4" imagesrc="images\flower.png"/> 
    <Smallheading  nonsticky="place4" notify="Have Fun " />
    <Stepbutton  wrapper="wrapper4" newsection="mysection4" Number="5"/> 
    <Steptext important="imp4"
    dummytext={dummytext.dummytext4}
    />
    </div>
)
}