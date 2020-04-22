import Smallimage from "../../Myconstants/Smallimage";
import Smallheading from "../../Myconstants/Smallheading";
import Steptext from "../../Myconstants/Steptext";
import Bigbutton from "../../Myconstants/Bigbutton";

const notify={
    notification:" Looking to have your business platform migrated to the Java-based framework to become future-proof? We’re listening! Spineor can assist you in migration services to ensure a smooth and efficient workflow. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ",
    notices:"Apps run smoothly if they’re maintained from time to time. Our Java application maintenance support ensures that your apps always run at their peak performance so your business won’t have to suffer. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"
}
export default  function Migrate (){
    return(
        <div>
           <Smallimage
            classes="back1"
            imagesrc="\images\javadevop.png"
           />
           <Smallheading
           nonsticky="notsticky"
           notify="Java Migration Service"
           />
           <Steptext
           important="doimp"
           dummytext={notify.notification}
           />
            <Bigbutton
            className="outlabel"
            myclassName="innlabel"
            biglabel="Request A Free Consultation"
            />
           <Smallimage
            classes="lockimage"
            imagesrc="\images\maintain.png"
           />
           <Smallheading
           nonsticky="mystick"
           notify="Java Maintenance And Support"
           />
           <Steptext
           important="animp"
           dummytext={notify.notices}
           />
           <Bigbutton
           className="primary"
           myclassName="secondary"
           biglabel="Request A Free Consultation"
           />
        </div>
    )
}