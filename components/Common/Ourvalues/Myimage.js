import React, { Component } from 'react'

export class Myimage  extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="image"></div>
                <img  className="image"src="images/african4.png"/>  
                <div className="clear"></div> 
                <div className="clear_content">
                <p>We think in a key set of principles that assist each Spineorian work on  <br/>
                 his or her own through critical issues. We respect our precious clients at <br/>
                  Ogma. All we do is influenced by the customer value construction mission.</p>
                  <p> The key values of Spineor shape its culture, always promoting disruptive <br/>
                   innovations to be developed and delivered, as well as defining our <br/>
                    connection with customers, staff, and the entire community. </p></div>  
                <div className="outer_div"></div>

                <div className="inner_content">We Keep Customers At <br/> The Heart Of Our <br/> Business</div> 
                <style jsx>{`
                .clear_content{
                    position: absolute;
                width: 567px;
                height: 213px;
                left: 693px;
                top: 1466px;
                font-family: Roboto;
                font-style: normal;
                font-weight: 300;
                font-size: 18px;
                line-height: 21px;
                color: #333333;

                }
                .clear{
                    position: absolute;
                    width: 699px;
                    height: 243px;
                    left: 602px;
                    top: 1394px;
                    background: #FFFFFF;
                }
                    .inner_content{
                        position: absolute;
                        width: 517px;
                        height: 181px;
                        left: 68px;
                        top: 1362px;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 48px;
                        line-height: 56px;
                        color: #FFFFFF;
                    }
                    .outer_div{
                        position: absolute;
                        width: 617px;
                        height: 353px;
                        left: 34px;
                        top: 1284px;
                        background: #184A88;
                    }
                    .image{
                        position: absolute;
                        width: 1300px;
                        height: 859px;
                        left: 1px;
                        top: 778px;
                     }
                    `}</style>
             </React.Fragment>
        )
    }
}

export default Myimage
