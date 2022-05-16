import ButtonQuestion from "./ButtonQuestion"
import ButtomNumberQuestion from "./ButtomNumberQuestion";
import React from "react"



export default function Page2() {



    const ButtonsNumbersQuestions = [
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        { question: " O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" },
        { question: " Podemos colocar __ dentro do JSX ", answer: " expressões" },
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        { question: " O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" },
        { question: " Podemos colocar __ dentro do JSX ", answer: " expressões" },
    ]


    const [backFaceCard, setBackFaceCard] = React.useState("")
    function showQuestion(index) {

        setBackFaceCard(index)

    }


    const [answer, setAnswer] = React.useState("button normal")

    function eventButtonAnswer(param) {
        setAnswer(param)
    }


    return (
        <>
            <header>
                <img src="assets/logo.png"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="page2">

                {ButtonsNumbersQuestions.map((element, index) => backFaceCard !== index
                    ? <ButtomNumberQuestion key={index} numberQuestion={index + 1} showQuestion={() => showQuestion(index)} responseButton={answer} />
                    : <ButtonQuestion key={index} question={element.question} answer={element.answer} eventButtonAnswer={() => eventButtonAnswer(1, 2, 3)} />)
                }


            </main>

            <footer>
                <h2> 0/8 CONCLUÍDOS</h2>
            </footer>
        </>
    )
}