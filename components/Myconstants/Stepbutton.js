export default function Stepbutton({Number,newsection}){
    return(
        <div>
            <main className="wrapper">
                <section className={`section ${newsection}`}>
                   STEP{Number}
                </section>
            </main>
        <style jsx>{`
        .wrapper{
            position: absolute;
            width: 100px;
            height: 100px;
            left: 19px;
            top: 1836px;
            background: #184A88;
        }
        .section{
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 28px;
                padding-top:32px;
                padding-left:10px;
                
        }
        .mysection{
    
            width: 79px;
            height: 28px;
            left: 30px;
            top: 1872px;
            color: #FFFFFF;
        }
        `}</style>
        </div>
    )
}