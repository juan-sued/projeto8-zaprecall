import React from "react";
import { Link } from "react-router-dom";
export default function Page1(props) {
    function ButtonDisable() {
        return (
            <button className="buttonDisable" > Inciar Recall!</button>

        )
    }

    function ButtonEnable() {
        return (
            <Link to="/page_2" >
                < button className="buttonEnable" > Inciar Recall!</button>

            </Link >

        )
    }

    console.log(props.inputValue)

    return (
        <div className="page1">
            <header>
                <img src="assets/logo.png"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="page1">
                <input className="inputNumberQuestions" type="number" min={1} max={8} placeholder="Escolha uma meta (1-8)" onChange={(event) => props.onChange(event)} />
                {props.inputValue === undefined ? <ButtonDisable /> : <ButtonEnable />}

            </main>

        </div >
    )
}


