import React, { Component } from 'react'
import Head from "next/head";

 class Methodology extends Component {
    render() {
        return (
            <React.Fragment>
            <img className="image_wrapper" src= "images\africannew.png"/>
              <div className="text_wrap"></div>
              <div className="image_right">
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting <br />
              industry. Lorem Ipsum has been the industry's standard dummy text<br />
               ever since the 1500s, when an unknown printer took a galley of type and<br />
                scrambled it to make a type specimen book.</p>
              <p>
                It has survived not only five centuries, but also the leap into electronic<br />
                  typesetting, remaining essentially unchanged. It was popularised in the<br />
                   1960s with the release of Letraset sheets containing.</p>
              <p>
                Lorem Ipsum passages, and more recently with desktop publishing<br />
                     software like Aldus PageMaker including versions of Lorem Ipsum.<br />
              </p>
              </div>
              <div className="image_left">
            </div>

            <div className="image_left_header">
              Our<br /> Methodology
              </div>
            <div className="image_left_text">
              Spineor, we have  an  enormous  industry <br />
                experience in  developing a  methodology that <br />
                applies to all projects irrespective of size and  <br />
                duration.
              </div>
              <style jsx>{`
                  .text_wrap{
                        position: absolute;
                    width: 699px;
                    height: 243px;
                    left: 602px;
                    top: 1394px;
                    background: #FFFFFF;
                  }
                .image_wrapper{
                    position: absolute;
                    width: 1300px;
                    height: 859px;
                    left: 1px;
                    top: 778px;  
                
                }
                .image_left{
                    position: absolute;
                    width: 617px;
                    height: 399px;
                    left: 34px;
                    top: 1238px;
                    background: #184A88;
                }
                .image_left_header{
                    position: absolute;
                    width: 540.85px;
                    height: 113px;
                    left: 68.17px;
                    top: 1312px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 48px;
                    line-height: 56px;
                    color: #FFFFFF;

                }
                .image_left_text{
                    position: absolute;
                    width: 525.23px;
                    height: 146px;
                    left: 74.03px;
                    top: 1445px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 28px;
                    color: #FFFFFF;

                }
                .image_right{
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
                 `}</style>
            </React.Fragment>
        )
    }
}

export default Methodology
