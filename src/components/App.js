import '../assets/css/reset.css';
import '../assets/css/style.css';
import React from "react";
import Init from "../components/Init";
import Questions from "../components/Questions";



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

