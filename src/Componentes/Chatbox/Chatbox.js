import React from "react";
import { MainChatBox, Balao } from "./styledChatBox";
import tickGreen from "../assets/tick-green-double.svg";
import tickWhite from "../assets/tick-white-double.svg";
import audio from "../assets/audio.mp3";

const Chatbox = (props) => {
  function deletaMensagem(idDaMensagem) {
    const apagaMensagem = props.valor.filter((mensagem) => {
      return mensagem.idDoAutor !== idDaMensagem;
    });

    let retorno = window.confirm("Deseja apagar a mensagem?");
    if (retorno) {
      return props.setValor(apagaMensagem);
    }
  }

  const mensagem = props.valor.map((mensagem, index) => {
    return (
      <Balao
        key={index}
        person={mensagem.person}
        onDoubleClick={() => deletaMensagem(mensagem.idDoAutor)}
      >
        <h1>{mensagem.person}</h1>
        <div>
          <p>{mensagem.mensagem}</p>

          <div>
            {mensagem.horario}
            <img
              src={mensagem.person !== "Sal" ? `${tickGreen}` : `${tickWhite}`}
              alt="ticket"
            />
          </div>
        </div>
      </Balao>
    );
  });

  return <MainChatBox>{mensagem}</MainChatBox>;
};

export default Chatbox;
