import React, { Component } from 'react'

class Topbanner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="outer_wrapper"></div>
                <div className="inner_wrapper">Events & Celebrations</div>
                <div className="inner_text">
                    The secret to excellence at<br />
                 Spineor lies in the fun we all<br />
                  have from time to time<br />
                   together. In planning your<br />
                    business event, we give the<br />
                     utmost flexibility. Always<br />
                      discover playing, experimenting<br />
                       and exploring time.
                </div>
                <div className="button_wrapper"></div>
                <div className="button_inner">Get in touch</div>

                <style jsx>{`
                .button_inner{
                    position: absolute;
                    width: 86px;
                    height: 19px;
                    left: 692px;
                    top: 566px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 19px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #184A88;
                }
                .button_wrapper{
                    position: absolute;
                    width: 158px;
                    height: 50px;
                    left: 658px;
                    top: 551px;
                    background: transparent;
                    border: 2px solid #184A88;
                    box-sizing: border-box;
                    border-radius: 4px;
                }
                .outer_wrapper{
                    position: absolute;
                    width: 1300px;
                    height: 630px;
                    left: 0px;
                    top: 74px;
                    background: #FFFFFF;
                    z-index:-1
                }
                .inner_wrapper{
                    position: absolute;
                    width: 435px;
                    height: 186px;
                    left: 111px;
                    top: 298px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 76px;
                    line-height: 89px;
                    color: #333333;
                    z-index:-1
                }
                .inner_text{
                 position: absolute;
                width: 515px;
                height: 330px;
                left: 656px;
                top: 196px;
                font-family: Roboto;
                font-style: normal;
                font-weight: 300;
                font-size: 36px;
                line-height: 42px;
                color: #333333;
                z-index:-1
                }
                `}</style>
            </React.Fragment>
        )
    }
}

export default Topbanner
