// função que renderiza o footer enquanto é jogado
export default function FooterPlay(props) {
    return (
        <footer className="footerPlay">
            <h2> {props.arrNameIcons.length}/8 CONCLUÍDOS</h2>
            <div className="icons">
                {props.arrNameIcons.map((element, index) => <ion-icon key={index} class={element === "checkmark-circle" ? "answerCorrectIcon" : element === "help-circle" ? "answerAlmostIcon" : "answerIncorrectIcon"} name={element}></ion-icon>)}

            </div>
        </footer>
    )
}