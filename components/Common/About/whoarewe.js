import React from 'react'


const  Whoarewe  = () => {
    return (
        <React.Fragment>
            <div className="outer_wrapper">
                <div className="inner_header">
                 WHO ARE WE?
                </div>
                <div className="inner_text">
                All you need for digital<br/>
                 domination, under one expert <br/>
                 roof. We are the right technology <br/>
                 partner to drive.
                </div>
                <div className="button_outer">
                </div>
                <div className="button_inner">
                Get in touch
                </div>
            </div>
            <style jsx>{`
                .outer_wrapper{
                    position: absolute;
                    width: 1300px;
                    height: 630px;
                    left:0px;
                    top: 74px;
                    background: #ffffff;
                    z-index:-1
                }
                .inner_header{
                    position: absolute;
                    width: 435px;
                    height: 186px;
                    left: 111px;
                    top: 264px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 90px;
                    line-height: 105px;
                    color: #333333;
                }
                .inner_text{
                    position: absolute;
                    width: 515px;
                    height: 223px;
                    left: 656px;
                    top: 246px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 36px;
                    line-height: 42px;
                    color: #333333;
                }
                .button_outer{
                    position: absolute;
                    width: 158px;
                    height: 50px;
                    left: 658px;
                    top: 448px;
                    background: #FFFFFF;
                    border: 2px solid #184A88;
                    border: 2px solid #184A88;
                    box-sizing: border-box;
                    border-radius: 4px;
                }
                .button_inner{
                    position: absolute;
                    width: 86px;
                    height: 19px;
                    left: 692px;
                    top: 463px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 19px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #184A88;
                    color: #184A88;
                }
          `}</style>
        </React.Fragment>
    )
}

export default Whoarewe
