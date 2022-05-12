



export default function Button({ question }) {
    return (
        <>

            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <button >
                            <p>
                                {question}
                            </p>
                            <ion-icon name="play-outline"></ion-icon>
                        </button>
                    </div>
                    <div className="back">
                        aqui é as costas do bagulho
                    </div>
                </div>
            </div>



        </>
    )
}