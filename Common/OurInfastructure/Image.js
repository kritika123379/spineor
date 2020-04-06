import React, { Component } from 'react'
import Layout from '../../components/Layout'

export class Image extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                <div className="outer_container">
                </div>
                <img  className="outer_container" src="images\african4.png"/>
                <div className="freespace"></div>
                <div className="methodology"></div>
                <div className="inner_text">
                Delivering Higher<br/>
                 Service Levels With <br/>
                 New It-Enabled<br/>
                  Capabilities
                </div>
                <div className="para">
                <p>
                We're building powerful relationships here at Spineor. We share our<br/>
                 experiences collectively and work together to create better products for<br/>
                  our clients. We think we can attain the highest outcomes through <br/>
                  cooperation and apply our common understanding and abilities to each<br/>
                   project. We think that the voice of everyone matters and that any person<br/>
                    can come up with the finest thoughts. Spineor has a flat organizational<br/>
                     structure that enables us to be more effective in constructing amazing<br/>
                      products so that we can devote our time.</p><p>
                       We believe the voice of all matters and the best ideas can come from<br/>
                        any individual. Spineor has a flat organizational structure that allows us<br/>
                         to be more efficient in building awesome products so that we can spend <br/>
                         our time.</p>
                </div>

                <style jsx>{`
                .outer_container{
                    position: absolute;
                    width: 1300px;
                    height: 859px;
                    left: 1px;
                    top: 778px;
                 
                }
                .methodology{
                     position: absolute;
                    width: 617px;
                    height: 399px;
                    left: 34px;
                    top: 1238px;
                    background: #184A88;
                }
                .freespace{
                  position: absolute;
                    width: 699px;
                    height: 243px;
                    left: 602px;
                    top: 1394px;
                    background: #FFFFFF;
                }
                .para{
                    position: absolute;
                    width: 567px;
                    height: 287px;
                    left: 693px;
                    top: 1466px;       
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 21px;        
                    color: #333333;         
                }
                .inner_text{
                    position: absolute;
                    width: 517px;
                    height: 234px;
                    left: 68px;
                    top: 1312px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 48px;
                    line-height: 56px;
                    color: #FFFFFF;
                }
                `}</style>
                </Layout>
            </React.Fragment>
        )
    }
}

export default Image
