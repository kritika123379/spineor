import React, { Component } from 'react'

class Javafactory extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="outer_wrapper">    
                    </div>
                    <div className="inner_wrapper">
                    </div>   
                    <img className="java_image" src="\images\javafactory.png"></img>   
                    <div className="java_factory_header">
                    JAVA FACTORY PROCESS 
                    </div>
                <style jsx>{`
                .outer_wrapper{
                 position: absolute;
                width: 1300px;
                height: 703px;
                left: 0px;
                top: 785px;
                }
                .inner_wrapper{
                    position: absolute;
                    width: 1300px;
                    height: 703px;
                    left: 0px;
                    top: 785px;
                    background: #221B26;
                }
                
                .java_factory_header{
                    position: absolute;
                    width: 420px;
                    height: 42px;
                    left: 443px;
                    top: 822px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 36px;
                    line-height: 42px;
                    text-align: center;
                    color: #FFFFFF;
                }
                .java_image{
                    position: absolute;
                    width: 1245px;
                    height: 626px;
                    left: 0px;
                    top: 844px;
               
                }
               
                `} </style>
            </React.Fragment>
        )
    }
}

export default Javafactory
