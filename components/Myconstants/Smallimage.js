export default function Smallimage({classes,imagesrc}){
    return(
        <div>
        <img className={classes} src={imagesrc} />
        <style jsx>{`
            .position{
                position: absolute;
                width: 561px;
                height: 374px;
                left: 693px;
                top: 1767px;
            }
        `}</style>
        </div>
    )
}