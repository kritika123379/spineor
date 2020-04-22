import Backimage from "../../Myconstants/Bckimage";

export default function Myjava(){
    return(
        <div>
        <main className="main"></main>
        <Backimage
        className="bck3"
        image="\images\javafactory.png"
        />
        <legend> JAVA FACTORY PROCESS </legend>
     
        <style jsx>{`
        legend{
            position: absolute;
            width: 420px;
            height: 42px;
            left: 443px;
            top: 822px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 42px;
            text-align: center;
            color: #FFFFFF;
            }
            .main{
                position: absolute;
                width: 1300px;
                height: 703px;
                left: 0px;
                top: 785px;
                background: #221B26;
            }
        `}</style>
        </div>
    )
}