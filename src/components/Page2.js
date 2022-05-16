import ButtonQuestion from "./ButtonQuestion"
import ButtomNumberQuestion from "./ButtomNumberQuestion";
import React from "react"



export default function Page2() {


    //variável de estado contendo as questões
    const [ButtonsNumbersQuestions, setButtonsNumbersQuestions] = React.useState([
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript", type: " " },
        { question: " O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces", type: " " },
        { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula", type: " " },
        { question: " Podemos colocar __ dentro do JSX ", answer: " expressões", type: " " },
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript", type: " " },
        { question: " O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces", type: " " },
        { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula", type: "" },
        { question: " Podemos colocar __ dentro do JSX ", answer: " expressões", type: " " },
    ])

    // função que vira o card
    const [backFaceCard, setBackFaceCard] = React.useState("card fechado")
    function showQuestion(index) {
        setBackFaceCard(index)

    }
    //função que torna questão como errada e atualiza a array de questions
    function eventButtonAnswerWrong(type, position) {
        ButtonsNumbersQuestions[position].type = type
        const newButtonsNumbersQuestions = [...ButtonsNumbersQuestions]
        setButtonsNumbersQuestions(newButtonsNumbersQuestions)
        incrementListIcons("close-circle")
        setBackFaceCard("card fechado")

    }

    //função que torna questão como quase certa e atualiza a array de questions
    function eventButtonAnswerAlmost(type, position) {
        ButtonsNumbersQuestions[position].type = type
        const newButtonsNumbersQuestions = [...ButtonsNumbersQuestions]
        setButtonsNumbersQuestions(newButtonsNumbersQuestions)
        incrementListIcons("help-circle")
        setBackFaceCard("card fechado")
    }
    //função que torna questão como certa e atualiza a array de questions
    function eventButtonAnswerCorrect(type, position) {
        ButtonsNumbersQuestions[position].type = type
        const newButtonsNumbersQuestions = [...ButtonsNumbersQuestions]
        setButtonsNumbersQuestions(newButtonsNumbersQuestions)
        incrementListIcons("checkmark-circle")
        setBackFaceCard("card fechado")
    }


    const [arrIcons, setArrIcons] = React.useState([])
    //função que incrementa e atualiza a lista de icons vinda de eventButtons
    function incrementListIcons(icon) {
        arrIcons.push(icon)
        const newArrIcons = [...arrIcons]
        setArrIcons(newArrIcons);
        console.log(arrIcons)

    }
    return (


        <>
            <header>
                <img src="assets/logo.png"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="page2">

                {ButtonsNumbersQuestions.map((element, index) => backFaceCard !== index
                    ? <ButtomNumberQuestion key={index} numberQuestion={index + 1} showQuestion={() => showQuestion(index)} responseButton={element.type} />
                    : <ButtonQuestion key={index}
                        question={element.question}
                        answer={element.answer}
                        eventButtonAnswerWrong={() => eventButtonAnswerWrong("answerWrong", index)}
                        eventButtonAnswerAlmost={() => eventButtonAnswerAlmost("answerAlmost", index)}
                        eventButtonAnswerCorrect={() => eventButtonAnswerCorrect("answerCorrect", index)} />)
                }


            </main>

            {arrIcons.length === 8 ? <FooterResults arrNameIcons={arrIcons} /> : <FooterPlay arrNameIcons={arrIcons} />}

        </>
    )
}


//função que renderiza o resultado do footer
function FooterResults(props) {

    const arrCheckFilter = props.arrNameIcons.filter((element) => element === "checkmark-circle")
    console.log(arrCheckFilter)

    return (
        <footer className="footerResults">

            {arrCheckFilter.length === props.arrNameIcons.length ? <CongratulationsResult /> : <SadResult />}

            <h2> {props.arrNameIcons.length}/8 CONCLUÍDOS</h2>
            <div className="icons">
                {props.arrNameIcons.map((element, index) => <ion-icon key={index} class={element === "checkmark-circle" ? "answerCorrectIcon" : element === "help-circle" ? "answerAlmostIcon" : "answerIncorrectIcon"} name={element}></ion-icon>)}

            </div>
        </footer>


    )

}
//função que renderiza o resultado do footer caso tenha uma errada
function SadResult() {
    return (
        <>
            <span >
                <img src="../assets/sad.png" alt="" />
                <h2>Putz...</h2>
            </span>

            <p>Ainda faltam alguns... Mas não desanime!</p>

        </>
    )
}

//função que renderiza o resultado do footer caso todas estejam certas
function CongratulationsResult() {
    return (
        <>
            <span >
                <img src="../assets/party.png" alt="" />
                <h2>Parabéns</h2>
            </span>

            <p>Você não esqueceu de nenhum flashcard!</p>

        </>
    )

}







// função que renderiza o footer enquanto é jogado
function FooterPlay(props) {
    return (
        <footer className="footerPlay">
            <h2> {props.arrNameIcons.length}/8 CONCLUÍDOS</h2>
            <div className="icons">
                {props.arrNameIcons.map((element, index) => <ion-icon key={index} class={element === "checkmark-circle" ? "answerCorrectIcon" : element === "help-circle" ? "answerAlmostIcon" : "answerIncorrectIcon"} name={element}></ion-icon>)}

            </div>
        </footer>
    )
}