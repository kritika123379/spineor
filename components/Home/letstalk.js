const LetsTalk = () => {
    return(
        <div>
            <div className= "content-box">        
            <div className= "content">
            Got a project in mind? Get started now.
            </div>
            <div className= "button-outer">
                <div className= "button-inner">
                Let’s Talk 
                </div>
            </div>
            </div>
    <style jsx>{`
    .content {
        position: absolute;
        width: 552px;
        height: 38px;
        left: 25px;
        top: 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 37px;
        color: #333333;
    }

    .button-outer {
        position: absolute;
        width: 141px;
        height: 50px;
        left: 200px;
        top: 81px;       
        background: #184A88;
        border: 2px solid #184A88;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .button-inner {
        position: absolute;
        width: 66px;
        height: 19px;
        left: 36px;
        top: 15px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
    }

    .content-box {
        position: absolute;
        width: 552px;
        height: 132px;
        left: 374px;
        top: 5199px;
    }
    `}</style>
        </div>
    )
}
export default LetsTalk