const mystyle={
position:"absolute",
width: "11px",
height: "11px",
background: "#8E8E8E",
borderRadius: "50%"
}
function Ellipse(props){
    return(
        <div>
       <div style={mystyle} className={props.className}></div>
       <style jsx>{`
       .ellipse1{
        left: 690px;
        top: 2545px;
       }
       .ellipse2{
        left: 690px;
        top: 2603px;
       }
       .ellipse3{
        left: 690px;
        top: 2653px;
       }
       .ellipse4{
        left: 690px;
        top: 2703px;
       }
       .ellipse5{
        left: 991px;
        top: 2553px;
       }
       .ellipse6{
        left: 991px;
        top: 2603px;
       }
       .ellipse7{
        left: 991px;
        top: 2653px;
       }
       `}</style>
        </div>
    )
}
export default Ellipse