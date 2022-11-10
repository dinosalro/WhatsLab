import React, { useState } from "react";
import camera from "../assets/video-cam.svg";
import phone from "../assets/phone.svg";
import hamburger from "../assets/hamburger.svg";
import bee from "../assets/bee.jpg";
import puppy from "../assets/puppy.jpg";
import star from "../assets/star.jpg";
import deck from "../assets/deck.webp";
import { MainHeader, Person, Icons } from "./styledHeader";

const Header = (props) => {
  function onChangePerson(event) {
    props.setPerson(event.target.value);
    console.log(props.person);
  }

  function retornaImagem() {
    if (props.person === "Sal") {
      return `${bee}`;
    } else if (props.person === "Foca") {
      return `${deck}`;
    } else if (props.person === "Luma") {
      return `${puppy}`;
    } else {
      return `${star}`;
    }
  }

  return (
    <MainHeader>
      <Person>
        <div>
          <img src={retornaImagem()} alt="" />
        </div>
        <div>
          <select value={props.person} onChange={onChangePerson}>
            <option value="Sal">Sal</option>
            <option value="Luma">Luma</option>
            <option value="Foca">Foca</option>
            <option value="Brisa">Brisa</option>
          </select>
          <p>Online</p>
        </div>
      </Person>
      <Icons>
        <img src={phone} alt="Phone" />
        <img src={camera} alt="Camera" />
        <img src={hamburger} alt="Hamburger" />
      </Icons>
    </MainHeader>
  );
};

export default Header;
