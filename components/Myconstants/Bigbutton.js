function Bigbutton(props){
    const className = `div ${props.type}`
   
    return(
        <React.Fragment>
        <section className={props.className} >
            <section className={props.myclassName}>
             {props.biglabel}
            </section>
          </section>
          <style jsx>{`
          .outer {
            position: absolute;
            width: 345px;
            height: 50px;
            left: 692px;
            top: 1755px;
            background: #FFFFFF;
            border: 2px solid #184A88;
            box-sizing: border-box;
            border-radius: 4px;
          }
          .inner{
              position: absolute;
              width: 272px;
              height: 19px;
              left: 43px;
              top: 14px;
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 19px;
              color: #184A88;
          }
          .outerwrap{
            position: absolute;
            width: 457px;
            height: 50px;
            left: 691px;
            top: 2876px;
            background: #FFFFFF;
            border: 2px solid #184A88;
            box-sizing: border-box;
            border-radius: 4px;
          }
          .innerwrap{
            padding-top:12px;
            padding-left:22px;
            width: 395px;
            height: 19px;
            left: 728px;
            top: 2892px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            color: #184A88;

          }
          
          `}</style>
        </React.Fragment>
    );
}
export default Bigbutton
