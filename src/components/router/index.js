import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Router path="/" element={Home}/>
            </Routes>
        </BrowserRouter>
    )
}