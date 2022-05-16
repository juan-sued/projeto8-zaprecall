import Page1 from "./Page1"
import React from "react";
import Page2 from "./Page2";



export default function App() {

    const [goPage2, setGoPage2] = React.useState('home');

    function goToPage2() {
        setGoPage2("page2");
    }

    return (
        <>
            {goPage2 === 'home' ? <Page2 /> : <Page1 goToPage2={goToPage2} />}
        </>
    )
}