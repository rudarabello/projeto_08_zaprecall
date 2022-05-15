import React from "react";
import Header from "./Header";
import Flashcard from "../components/Flashcard";
import Footer from "../components/Footer";

export default function Questions() {
    const [respondidas, setRespondidas] = React.useState(0);
    const [icones, setIcones] = React.useState([]);
    const [qtdLembrou, setQtdLembrou] = React.useState(0);
    const questionsData = [
        {
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
        },
        {
            question: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
        },
        {
            question: "Componentes devem iniciar com ___",
            answer: "letra maiúscula",
        },
        {
            question: "Podemos colocar __ dentro do JSX ",
            answer: "expressões",
        },
        {
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            question: "Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências",
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes",
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        },
    ];

    questionsData.sort(function randomize() {
        return Math.random() - 0.5;
    });

    let questionsDataScreen = [];

    for (let i = 0; questionsDataScreen.length <= 3; i++) {
        questionsDataScreen.push(questionsData[i]);
    }

    
    return (
        <>
            <div className="deck">
                <Header />
                <div className="flashcards">
                    {questionsDataScreen.map((p, index) => (<Flashcard
                        textData={p}
                        indexPergunta={index + 1}
                        contaRespostas={setRespondidas}
                        qtdRespostas={respondidas}
                        mudarIcones={setIcones}
                        iconesAtuais={icones}
                        lembrouQtd={qtdLembrou}
                        setLembrouQtd={setQtdLembrou}
                    />
                    ))}
                </div>
                <Footer qtdRespondidas={respondidas} icones={icones} questionsDataScreen={questionsDataScreen} qtd={qtdLembrou} />
            </div>
        </>
    );
}

