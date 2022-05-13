import './reset.css';
import './style.css';
import React from "react";
import Init from "./Init";
import Questions from "./Questions";



export default function App() {
    const[tela, setTela] =React.useState('init');
    return (
        <>
        {
           tela ==='init'? <Init setTela={setTela}/> : <Questions/>
        }
        </>
    );
}