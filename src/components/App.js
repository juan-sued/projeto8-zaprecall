import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

//

import Page1 from "./Pages/Page_1/Page1"
import Page2 from "./Pages/Page_2/Page2";




export default function App() {




    const [inputValue, setInputValue] = React.useState(undefined)

    function onChange(event) {

        if (event.target.value > 0 && event.target.value < 9) {
            setInputValue(event.target.value)
        } else {
            setInputValue(undefined)
        }


    }

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Page1 onChange={onChange} inputValue={inputValue} />} />
                    <Route path="/page_2" element={<Page2 metaCorrect={inputValue} />} />
                </Routes>
            </BrowserRouter>




        </>
    )
}