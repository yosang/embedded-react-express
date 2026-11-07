import React from "react"
import s from "./App.module.css";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";

function Hello() {
    return <h1>Hello</h1>
}

function World() {
    return <h1>World</h1>
}

export default function App() {
    return (
        <BrowserRouter>
            <h1>A peaceful mind</h1>
            <h2 className={s.subtitle}>is a calm mind...</h2>

            <ul className={s.style}>
                <Link to="/hello">Say hello</Link>
                <Link to="/world">to the world</Link>
            </ul>


            <Routes>
                <Route path="/hello" element={<Hello />} />
                <Route path="/world" element={<World />} />
            </Routes>
        </BrowserRouter>
    )
};