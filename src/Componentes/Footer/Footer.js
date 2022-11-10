import React, { useState } from "react";
import mic from "../assets/microphone.svg";
import smile from "../assets/smiley.svg";
import paperclip from "../assets/paperclip.svg";
import { MainFooter } from "./styledFooter";

const Footer = (props) => {
  const [message, setMessage] = useState("");

  function onChangeMessage(event) {
    setMessage(event.target.value);
  }

  function oneKeyDownInputs(event) {
    if (event.key === "Enter") {
      const novaMensagem = [...props.valor];

      const novaPessoa = {
        idDoAutor: Date.now(),
        person: props.person,
        mensagem: message,
        horario: new Date().toLocaleString("pt-BR", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
      };

      novaMensagem.push(novaPessoa);
      props.setValor(novaMensagem);

      setMessage("");
    }
  }

  return (
    <MainFooter>
      <div>
        <a href="#">
          <img src={smile} alt="smile icon" />
        </a>
        <input
          type={"text"}
          value={message}
          onChange={onChangeMessage}
          onKeyDown={oneKeyDownInputs}
        />
        <a href="#">
          <img src={paperclip} alt="clip icon" />
        </a>
      </div>
      <div>
        <a href="#" onClick={Audio}>
          <img src={mic} alt="Microfone" />
        </a>
      </div>
    </MainFooter>
  );
};

export default Footer;
