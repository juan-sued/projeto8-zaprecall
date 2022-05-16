
function ButtomAnswer(props) {
    <button className="answerIncorrect">
        <p >
            Pergunta {props.numberQuestion}
        </p>
        <ion-icon name="close-circle"></ion-icon>
    </button>
}




export default function ButtomNumberQuestion(props) {


    if (props.responseButton === "answerWrong") {

        return (

            <button className="answerIncorrect">
                <p >
                    Pergunta {props.numberQuestion}
                </p>
                <ion-icon name="close-circle"></ion-icon>
            </button>
        )
    }


    else if (props.responseButton === "answerAlmost") {
        return (
            <button className="answerAlmost" >
                <p >
                    Pergunta {props.numberQuestion}
                </p>
                <ion-icon name="help-circle"></ion-icon>
            </button>
        )
    }


    else if (props.responseButton === "answerCorrect") {
        return (
            <button className={props.answerIcorrect}>
                <p >
                    Pergunta {props.numberQuestion}
                </p>
                <ion-icon name="checkmark-circle"></ion-icon>
            </button>
        )
    }


    else {
        return (
            <button className="question" >
                <p >
                    Pergunta {props.numberQuestion}
                </p>
                <ion-icon name="play-outline" onClick={() => props.showQuestion()}></ion-icon>
            </button>
        )
    }
}

