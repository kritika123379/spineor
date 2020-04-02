import React, { Component } from 'react'

export class Process extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="image_wrapper">
                </div>
                <div className="image_left">
                </div>
                <div className="image_left_header">
                Our <br/> Process
                </div>
                <div className="image_left_text">
                 Over the past few years, Spineor has constructed <br/>
                a key collection of development and design <br/>
                facilities that not only surpassed our customers'<br/>
                 expectations. 
                </div>
                <div className="image_right">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
                industry. Lorem Ipsum has been the industry's standard dummy text<br/>
                 ever since the 1500s, when an unknown printer took a galley of type and <br/>
                 scrambled it to make a type specimen book. </p>
                 <p>It has survived not only five centuries, but also the leap into electronic<br/>
                  typesetting, remaining essentially unchanged. It was popularised in the<br/>
                   1960s with the release of Letraset sheets containing</p> 
                </div>
                <style jsx>{`
                .image_wrapper{
                    position: absolute;
                    width: 1300px;
                    height: 859px;
                    left: 1px;
                    top: 1858px;
                    background-image: url('african-american-american-asian-beautiful-black-brainstorming-1434033-pxhere.png');
                    border:2px solid black
                }
                .image_left{
                    position: absolute;
                    width: 617px;
                    height: 399px;
                    left: 34px;
                    top: 2318px;
                     background: #184A88;
                }
                .image_left_header{
                    position: absolute;
                    width: 540.85px;
                    height: 113px;
                    left: 68.17px;
                    top: 2392px;
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
                    top: 2525px;
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
                    height: 202px;
                    left: 693px;
                    top: 2546px;
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

export default Process
