import Page1 from "./Pages/Page_1/Page1"
import React from "react";
import Page2 from "./Pages/Page_2/Page2";
import FooterResults from "./FooterResults/FooterResults";



export default function App() {

    const [goPage, setGoPage] = React.useState('home');

    function goToPage(page) {
        setGoPage(page);
    }


    function goToHome(page) {
        setGoPage(page);
    }




    return (
        <>
            {goPage === 'home' ? <Page1 goToPage={() => goToPage("goToPage2")} />
                : goPage === "goToPage2" ? <Page2 />
                    : <FooterResults goToHome={() => goToHome("home")} />}
        </>
    )
}