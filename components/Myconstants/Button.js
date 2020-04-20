function Button(props) {
    return (
      <React.Fragment>
      <div className={`outer ${props.class}`}>
          <div className={`inner ${props.myclass}`}>
            {props.label}
        </div>
        </div>
        <style jsx>{`
        .outer {
          position:absolute;
          background: #FFFFFF;
          border: 2px solid #184A88;
          box-sizing: border-box;
          border-radius: 4px;
        } 
        .outers{
          width: 194px;
          height: 50px;
          left: 756px;
          top: 504px;
        }
        .myouter{
          width: 158px;
          height: 50px;
          left: 658px;
          top: 640px;  
        }
        .inner { 
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          color: #184A88;
          display: flex;
          align-items: center;
          text-align: center; 
          padding-top:17px; 
          padding-left:30px;
        }
        .inners{
          width: 194px;
          height: 19px;
          left: 894px;
          top: 519px;
        }
        .myinner{
          width: 140px;
          height: 19px;
          left: 692px;
          top: 583px;   
        }
        `}</style>
      </React.Fragment>
    );
   }

export default Button