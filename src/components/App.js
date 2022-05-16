import Page1 from "./Pages/Page_1/Page1"
import React from "react";
import Page2 from "./Pages/Page_2/Page2";



export default function App() {

    const [goPage2, setGoPage2] = React.useState('home');

    function goToPage2() {
        setGoPage2("page2");
    }

    return (
        <>
            {goPage2 === 'home' ? <Page1 goToPage2={goToPage2} /> : <Page2 />}
        </>
    )
}