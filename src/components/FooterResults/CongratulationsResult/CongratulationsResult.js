

//função que renderiza o resultado do footer caso todas estejam certas
export default function CongratulationsResult({ metaCorrect }) {
    return (
        <>
            <span >
                <img src="../assets/party.png" alt="" />
                <h2>Parabéns</h2>
            </span>

            <p>Você bateu sua meta de {metaCorrect} acertos!</p>

        </>
    )

}
