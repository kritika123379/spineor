import React from 'react'
import Topbanner from '../../Myconstants/Topbanner'
import Button from '../../Myconstants/Button'
import Myimage from './Myimage'
import Mywork from "./Mywork"

function Ourvalues(){
    return(
        <React.Fragment>
        <Topbanner 
        class="mybox"
        myclass="btext"
        heading="Our Values"
        paragraph="Spineor core values shapes 
        its culture, always encouraging 
        to develop and deliver 
        disruptive innovations, as well as 
        define our relationship with clients, employees and community as a whole."
        />
        <Button
        class="myouter"
        myclass="myinner"
        label="Get in touch"
        />
        <Myimage/>
        <Mywork/>
        </React.Fragment>
    )
}
export default Ourvalues
