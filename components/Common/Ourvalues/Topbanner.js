import React, { Component } from 'react'

export class Topbanner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="outer_wrapper"></div>
                <div className="outer_header">Our  <br/>Values</div>
                <div className="inner_doc">
                Spineor core values shapes its<br/>
                 culture, always encouraging to<br/>
                  develop and deliver disruptive<br/>
                   innovations, as well as define <br/>
                   our relationship with clients,<br/>
                    employees and community as a <br/>
                    whole.</div>
                    <div className="outer_button"></div>
                    <div className="inner_button">Get in touch</div>
                <style jsx>{`
                .outer_button{
                    position: absolute;
                    width: 158px;
                    height: 50px;
                    left: 658px;
                    top: 568px;
                    background: transparent;
                    border: 2px solid #184A88;
                    box-sizing: border-box;
                    border-radius: 4px;
                }
                .inner_button{
                    position: absolute;
                    width: 86px;
                    height: 19px;
                    left: 692px;
                    top: 583px;
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
                .inner_doc{
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
                    z-index:-1
                }
                .outer_header{
                    position: absolute;
                    width: 435px;
                    height: 186px;
                    left: 111px;
                    top: 258px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 90px;
                    line-height: 105px;
                    color: #333333;
                    z-index:-1
                }
                .outer_wrapper{
                    position: absolute;
                    width: 1300px;
                    height: 630px;
                    left: 0px;
                    top: 74px;
                    background: transparent;
                    z-index:-1
                }
                `}</style>
            </React.Fragment>
        )
    }
}

export default Topbanner
