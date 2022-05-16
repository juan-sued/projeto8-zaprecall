import ButtonQuestion from "../../ButtonQuestion/ButtonQuestion"
import ButtomNumberQuestion from "../../ButtomNumberQuestion/ButtomNumberQuestion";
import React from "react"
import FooterResults from "../../FooterResults/FooterResults";
import FooterPlay from "../../FooterPlay/FooterPlay";

export default function Page2() {


    //variável de estado contendo as questões
    const [ButtonsNumbersQuestions, setButtonsNumbersQuestions] = React.useState([
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript", type: " " },
        { question: "O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces", type: " " },
        { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula", type: " " },
        { question: "Podemos colocar __ dentro do JSX ", answer: " expressões", type: " " },
        { question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma", type: " " },
        { question: "Usamos o npm para __ ", answer: "gerenciar os pacotes necessários e suas dependências", type: " " },
        { question: "Usamos props para __ ", answer: "passar diferentes informações para componentes ", type: "" },
        { question: "Usamos estado (state) para __ ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", type: " " },
    ])
    const [embaralhado, setEmbaralhado] = React.useState(false)


    randomArray(ButtonsNumbersQuestions);
    // function que aleatoriza a array de objetos
    function randomArray(arr) {
        //embaralha as perguntas
        if (embaralhado === true) {
            return
        }
        console.log("passou na função " + ButtonsNumbersQuestions)
        setEmbaralhado(true);
        return arr.sort(random)

    }

    function random() {
        return Math.random() - 0.5;
    }





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
        <div className="page2Father">
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

        </div>
    )
}





