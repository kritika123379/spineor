function Backimage(props){
    return(
        <React.Fragment>
        <img className={`backimage ${props.className}`} src= {props.image}/>
        <style jsx>{`
        .backimage {
            position: absolute;
            left: 0px;
            width: 1300px;
            height: 859px;
          }
          .bck1{
            top: 791px;
          }
          .bck2{
            top: 778px; 
          }
          
        `}</style>
        </React.Fragment>
    )
}
export default Backimage