export default function Smallheading ({nonsticky,notify}){
    return(
        <div className={`stick ${nonsticky}`}>
            {notify}
        <style jsx>{`
        .stick{
        position: absolute;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 42px;
        line-height: 49px;
        color: #222222;
        }
        .place{
            width: 369px;
            height: 49px;
            left: 174px;
            top: 1832px;
        }

        `}</style>
        </div>
    )
}