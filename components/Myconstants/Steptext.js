export default  function Steptext({important,dummytext}){
    return(
        <div>
        <main className={`main ${important}`}>
            {dummytext}
        </main>
        <style jsx>{`
        .main{
            position: absolute;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 28px;
            color: #444444;
        }
        .imp{
            width: 476px;
            height: 244px;
            left: 174px;
            top: 1896px;
        }
        `}</style>
        </div>
    )
}