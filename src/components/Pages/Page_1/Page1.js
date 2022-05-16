

export default function Page1(props) {

    return (
        <div className="page1">
            <header>
                <img src="assets/logo.png"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="page1">
                <button onClick={() => props.goToPage()}>Inciar Recall!</button>
            </main>

        </div>
    )
}