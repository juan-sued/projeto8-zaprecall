import ButtonQuestion from "./ButtonQuestion"


export default function Page2() {

    return (
        <>
            <header>
                <img src="assets/logo.png"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="page2">
                <ButtonQuestion question={"Pergunta 1"} />
                <ButtonQuestion question={"Pergunta 2"} />
                <ButtonQuestion question={"Pergunta 3"} />
                <ButtonQuestion question={"Pergunta 4"} />


            </main>
            <footer>
                <h2> 0/4 CONCLUÍDOS</h2>
            </footer>
        </>
    )
}