import React, { Component } from 'react'

export class Fourth extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="image_wrapper">

                </div>
                <style jsx>{`
                .image-wrapper{
                    position: absolute;
                    width: 1299px;
                    height: 996px;
                    left: 1300px;
                    top: 2918px;
                    background: url(stock-photo-mans-hand-with-bits-and-starting-rocket-1062363092.png);
                    transform: matrix(-1, 0, 0, 1, 0, 0);
                    border:2px solid black
                }
            
        `}</style>
            </React.Fragment>
        )
    }
}

export default Fourth
