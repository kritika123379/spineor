import Java from "../Home/Java"

function Cart (props){
    return(
     
        <div>
        <div className={`outer ${props.className}`}></div>
        <div className={`inner ${props.myclassname}`}>{props.heading}</div>
        <div className={`small ${props.newclassname}`}>{props.children}</div> 
        <div className={`java-icon ${props.class === "secondary" ?  "primary" : ""}`}>
        <Java/></div>
      
        <style jsx>{`
        .outers{
          position: absolute;
          width: 617px;
          height: 399px;
          left: 33px;
          top: 1251px;
          background: #184A88;
        }
          .inners{
            position: absolute;
            width: 540.85px;
            height: 113px;
            left: 67.17px;
            top: 1325px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 48px;
            line-height: 56px;     
            color: #FFFFFF
          }
          .small_inner{
            position: absolute;
            width: 525.23px;
            height: 146px;
            left: 73.03px;
            top: 1458px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 28px;
            color: #FFFFFF;
          }
          .outer_wrap{
            position: absolute;
            width: 617px;
            height: 399px;
            left: 33px;
            top: 2351px;
            background: #184A88;
          }
          .inner_wrap{
            position: absolute;
            width: 349px;
            height: 113px;
            left: 221px;
            top: 2457px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 48px;
            line-height: 56px;
            color: #FFFFFF;
          }
          .inner_text{
            position: absolute;
            width: 525.23px;
            height: 146px;
            left: 84px;
            top: 2604px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 28px;
            color: #FFFFFF;
          }
          .java-icon {
            position: absolute;
            width: 173px;
            height: 182px;
            left: 32px;
            top: 62px;
        }  
        
        `}</style>
        </div>
    )
}
export default Cart