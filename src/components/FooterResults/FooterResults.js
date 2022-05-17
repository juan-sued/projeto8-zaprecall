
import SadResult from "./SadResult/SadResult"
import CongratulationsResult from "./CongratulationsResult/CongratulationsResult"
import { Link } from "react-router-dom"

//função que renderiza o resultado do footer
export default function FooterResults(props) {

    const arrCheckFilter = props.arrNameIcons.filter((element) => element === "checkmark-circle")


    return (
        <footer className="footerResults">

            {arrCheckFilter.length >= props.metaCorrect ? <CongratulationsResult metaCorrect={props.metaCorrect} /> : <SadResult />}

            <h2> {props.arrNameIcons.length}/8 CONCLUÍDOS</h2>
            <div className="icons">

                {props.arrNameIcons.map((element, index) => <ion-icon key={index} class={element === "checkmark-circle" ? "answerCorrectIcon" : element === "help-circle" ? "answerAlmostIcon" : "answerIncorrectIcon"} name={element}></ion-icon>)}

            </div>

            <Link to="/">
                <button> Recomeçar </button>
            </Link>

        </footer>


    )

}