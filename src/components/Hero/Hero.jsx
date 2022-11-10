import { useContext, useEffect, useState } from "react";

import { ContainerHero } from "./Hero.elements";

import HeroTitulo from "./HeroTitulo";
import HeroDescription from "./HeroDescription";

import CharacterContext from "../context/character/CharacterContext";

const Hero = () => {

  const { frases } = useContext(CharacterContext);

  const [ frase, setFrase ] = useState({
    id: "",
    text: "",
    autor: ""
  });

  const obtenerFraseAleatoria = () => {
    const min = 0;
    const max = frases.length - 1;
    const aleatorio = Math.floor((Math.random() * (max - min + 1)) + min);

    setFrase(frases[aleatorio]);
  }

  useEffect(() => {
    obtenerFraseAleatoria();
  })

  return (
    <ContainerHero>
      <HeroTitulo />
      <HeroDescription frase={frase}/>
    </ContainerHero>
  )
}

export default Hero;