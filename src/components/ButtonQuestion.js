import React from 'react';

// === FUNÇÃO QUE RENDERIZA UMA PERGUNTA === 
export default function ButtonQuestion(props) {

    //defina a variável de estado do front
    const [classCardFront, setclassCardFront] = React.useState('face')
    //define a variável de estado do verso
    const [classCardBack, setclassCardBack] = React.useState('back-face face flexBlock')

    //function que muda gira o card
    function showOptions() {

        //muda o estado da classe do verso
        setclassCardBack("faceVerso");
        //muda o estado da class do card front
        setclassCardFront('front-face face')

    }


    return (
        <>
            <div className="card">
                <div className={classCardFront}  >
                    <p>{props.question}</p>
                    <div className="iconcard">
                        <img src="../assets/turnicon.svg" alt="" onClick={() => showOptions()} />
                    </div>
                </div>
                <div className={classCardBack} >
                    <p>{props.answer}</p>

                    <span className='buttonsCardOptions'>
                        <button className='noRememberButton' onClick={() => props.eventButtonAnswer("answerWrong")} >
                            Não lembrei
                        </button>
                        <button className='almostRememberButton' onClick={() => props.eventButtonAnswer("answerAlmost")}>
                            Quase não lembrei
                        </button>
                        <button className='zapButton' onClick={() => props.eventButtonAnswer("answerCorrect")}>
                            Zap!
                        </button>
                    </span>
                </div>
            </div>
        </>
    )
}

