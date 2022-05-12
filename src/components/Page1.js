

export default function Page1(props) {

    return (
        <>
            <header></header>
            <main>
                <img src="assets/logo.png"></img>
                <h1>ZapRecall</h1>
                <button className="page1" onClick={() => props.goToPage2()}>Inciar Recall!</button>
            </main>
            <footer></footer>
        </>
    )
}