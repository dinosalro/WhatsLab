import Header from "./Componentes/Header/Header";
import { Main } from "./appStyled";
import Chatbox from "./Componentes/Chatbox/Chatbox";
import Footer from "./Componentes/Footer/Footer";
import { useState } from "react";

function App() {
  const [valor, setValor] = useState([]);
  const [person, setPerson] = useState("Sal");
  return (
    <Main>
      <Header person={person} setPerson={setPerson} />
      <Chatbox valor={valor} setValor={setValor} />
      <Footer valor={valor} setValor={setValor} person={person} />
    </Main>
  );
}

export default App;
