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
        setBackFaceCard("card fechado")

    }

    //função que torna questão como quase certa e atualiza a array de questions
    function eventButtonAnswerAlmost(type, position) {
        ButtonsNumbersQuestions[position].type = type
        const newButtonsNumbersQuestions = [...ButtonsNumbersQuestions]
        setButtonsNumbersQuestions(newButtonsNumbersQuestions)
        setBackFaceCard("card fechado")
    }
    //função que torna questão como certa e atualiza a array de questions
    function eventButtonAnswerCorrect(type, position) {
        ButtonsNumbersQuestions[position].type = type
        const newButtonsNumbersQuestions = [...ButtonsNumbersQuestions]
        setButtonsNumbersQuestions(newButtonsNumbersQuestions)
        setBackFaceCard("card fechado")
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

            <footer>
                <h2> {ButtonsNumbersQuestions.map()}/8 CONCLUÍDOS</h2>

                <div className="icons">
                    <ion-icon name="help-circle"></ion-icon>  <ion-icon name="help-circle"></ion-icon>  <ion-icon name="help-circle"></ion-icon>
                </div>

            </footer>
        </>
    )
}