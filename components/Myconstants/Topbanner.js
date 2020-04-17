function Topbanner(props) {
    return (
      <div>
        <div className="box1">
          {props.heading}
        </div>
        <div className="box2">
            {props.paragraph}
        </div>
        <style jsx>{`
          .box1 {
            position: absolute;
            width: 586px;
            height: 345px;
            left: 85px;
            top: 205px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 90px;
            line-height: 105px;   
            color: #333333;
          }
        
        .box2 {
          position: absolute;
          width: 411px;
          height: 266px;
          left: 754px;
          top: 205px;
          font-family: Roboto;
          font-style: normal;
          font-weight: 300;
          font-size: 36px;
          line-height: 42px;
          color: #222222;
          }
        `}</style>
      </div>
    );
   }
   export default Topbanner