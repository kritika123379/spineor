function Button(props) {
    return (
      <div>
      <div className="box3">
          <div className="box4">
            {props.label}
        </div>
        </div>
        <style jsx>{`
        .box3 {
          position: absolute;
          width: 194px;
          height: 50px;
          left: 756px;
          top: 504px;
          background: #FFFFFF;
          border: 2px solid #184A88;
          box-sizing: border-box;
          border-radius: 4px;
        } 
        .box4 {
          padding-top:10px;
          padding-left:30px ;       
          width: 194px;
          height: 19px;
          left: 894px;
          top: 519px;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          color: #184A88;
        }
        `}</style>
      </div>
    );
   }

export default Button