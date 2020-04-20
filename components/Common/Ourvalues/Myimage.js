import React, { Component } from 'react'
import Backimage from '../../Myconstants/Bckimage'
import Cart from '../../Myconstants/Cart'
import Work from '../../Myconstants/Work'

export class Myimage  extends Component {
    render() {
        return (
            <React.Fragment>
                <Backimage
                className="bck2"
                image="images/africannew.png"
                />

                <Work
                className="envelope"
                myclassname="myinnerwrap"
                paragraph="We think in a key set of principles that assist each Spineorian work on  
                his or her own through critical issues. We respect our precious clients at 
                 Ogma. All we do is influenced by the customer value construction mission.
                  The key values of Spineor shape its culture, always promoting disruptive 
                  innovations to be developed and delivered, as well as defining our 
                   connection with customers, staff, and the entire community."
                />
                
                <Cart  
                className="out"
                class="heading" 
                header="We Keep Customers At  The Heart Of Our  Business"
                />
            
             </React.Fragment>
        )
    }
}

export default Myimage
