import Smallimage from "../../Myconstants/Smallimage";
import Smallheading from "../../Myconstants/Smallheading";
import Steptext from "../../Myconstants/Steptext";
import Bigbutton from "../../Myconstants/Bigbutton";

const dummytext={
    dummytext:"  Enterprises face a sea of challenges in a  quest to constantly expand and stay  competitive. Our Java enterprisedevelopment services are specifically aimed     at boosting the enterprise growth in a well  and sustained manner. Lorem ipsum, Our  lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web  designs.",
    label:" Request A Free Consultation"
}
export default function Devops(){
    return(
        <React.Fragment>
        <Smallimage
        classes="static"
        imagesrc="/images/enterprise.png"
        />
        <Smallheading
        nonsticky="stickyword"
        notify=" Enterprise Java Development"
        />
        <Steptext
        important="isimp"
        dummytext={dummytext.dummytext}
        />
        <Bigbutton
        className="wrapper"
        myclassName="innerwrapper"
        biglabel={dummytext.label}
        />
        </React.Fragment>
    )
}