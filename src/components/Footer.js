import React from "react";
import imgParty from "../assets/img/party.png";
import imgSad from "../assets/img/sad.png";

export default function Footer(props) {
  const feedbacks = {
    titleParty: "Parabéns!!!",
    titleSad: "Putz...",
    imgParty: imgParty,
    imgSad: imgSad,
    textParty: "Você não esqueceu de nenhum flashcard!",
    textSad: "Ainda faltam alguns... Mas não desanime!",
  };

  function Resultado(props) {
    return (
      <div className="resultado">
        <div>
          <img src={props.img} alt="" />
          <p>{props.titulo}</p>
        </div>
        <p>{props.texto}</p>
      </div>
    );
  }

  function Contagem() {
    return (
      <div>
        {props.qtdRespondidas}/{props.questionsDataScreen.length} concluídos
      </div>
    );
  }

  return (
    <div className="footer">
      {props.qtd === props.questionsDataScreen.length ? (
        <Resultado
          img={feedbacks.imgParty}
          titulo={feedbacks.titleParty}
          texto={feedbacks.textParty}
        />
      ) : (
        ""
      )}
      {props.qtdRespondidas === props.questionsDataScreen.length &&
      props.qtd !== props.questionsDataScreen.length ? (
        <Resultado
          img={feedbacks.imgSad}
          titulo={feedbacks.titleSad}
          texto={feedbacks.textSad}
        />
      ) : (
        ""
      )}
      <Contagem />
      {props.icones.map((name) => (
        <ion-icon name={name}></ion-icon>
      ))}
    </div>
  );
}



