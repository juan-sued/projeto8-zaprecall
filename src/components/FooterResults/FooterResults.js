
import SadResult from "./SadResult/SadResult"
import CongratulationsResult from "./CongratulationsResult/CongratulationsResult"

//função que renderiza o resultado do footer
export default function FooterResults(props) {

    const arrCheckFilter = props.arrNameIcons.filter((element) => element !== "close-circle")
    console.log("batata" + arrCheckFilter)

    return (
        <footer className="footerResults">

            {arrCheckFilter.length === props.arrNameIcons.length ? <CongratulationsResult /> : <SadResult />}

            <h2> {props.arrNameIcons.length}/8 CONCLUÍDOS</h2>
            <div className="icons">
                {props.arrNameIcons.map((element, index) => <ion-icon key={index} class={element === "checkmark-circle" ? "answerCorrectIcon" : element === "help-circle" ? "answerAlmostIcon" : "answerIncorrectIcon"} name={element}></ion-icon>)}
            </div>
            {props.arrNameIcons.length === 8 ? <button>Recomeçar</button> : ""}
        </footer>


    )

}