import React from "react";
import seta from "../assets/img/setinha.png";

export default function Flashcard(props) {
    const [telaFlash, setTelaFlash] = React.useState("escondido");
    const [telaResposta, setTelaResposta] = React.useState(false);
    const [typeClass, setTypeClass] = React.useState("flashcard");
    const [icone, setIcone] = React.useState("play-outline");
    const [flashText, setflashText] = React.useState(props.textData.question);

    function Escondido() {
        return (
            <div className={typeClass} onClick={() => setTelaFlash('pergunta')}>
                <p>Pergunta {props.indexPergunta}</p>
                <ion-icon name={icone}></ion-icon>
            </div>
        );
    }

    function Pergunta() {
        function verResposta() {
            setflashText(props.textData.answer);
            setTelaResposta(true);
        }
        return (
            <div className="pergunta">
                <p>{flashText}</p>
                {telaResposta ? (<Resposta />) : (
                    <img
                        className="setinha"
                        onClick={() => verResposta()}
                        src={seta}
                        alt=""
                    />
                )}
            </div>
        );
    }

    function Resposta() {
        return (
            <div className="opcoes">
                <p onClick={() => Respondido("ruim", "ban-sharp")}
                    className="nivel-ruim">Não lembrei
                </p>
                <p onClick={() => Respondido("medio", "help-circle-sharp")}
                    className="nivel-medio">Quase não lembrei
                </p>
                <p onClick={() => Respondido("bom", "checkmark-circle-sharp")}
                    className="nivel-bom" >Zap!
                </p>
            </div>
        );

    }


    function Respondido(valorResposta, ionIcon) {

        setTypeClass(valorResposta);
        setIcone(ionIcon);
        setTelaFlash("respondido");
        props.mudarIcones([...props.iconesAtuais, ionIcon]);
        props.contaRespostas(props.qtdRespostas + 1);

        if (valorResposta === 'bom' || valorResposta === 'medio') {
            props.setLembrouQtd(props.lembrouQtd + 1);
        }
    }



    return (
        <>
            {telaFlash === "escondido" ? <Escondido /> : ""}
            {telaFlash === "respondido" ? <Escondido /> : ""}
            {(telaFlash === "pergunta") && (typeClass === 'flashcard') ? <Pergunta /> : ""}
            {(telaFlash === "pergunta") && (typeClass === 'ruim' || typeClass === 'medio' || typeClass === 'bom') ? <Escondido /> : ""}

        </>
    );
}