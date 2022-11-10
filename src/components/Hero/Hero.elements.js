import styled from "styled-components";
import { GlobalVariable } from "../../GlobalStyles";

const { sizeText4, sizeText5, sizeText8 } = GlobalVariable;

const ContainerHero = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(52,86,61,.5),rgba(2,15,22,.65)), url("/assets/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TituloHero = styled.h1`
  text-align: center;
  font-family: "Spooky Monster", sans-serif;
  color: #82bf45;
  font-size: ${sizeText8};
  padding: 0 10px;
`;

const DescriptionHero = styled.p`
  max-width: 450px;
  padding: 20px;
  color: #17a3ac;
  line-height: 1.6;
  font-family: "Spooky Monster", sans-serif;
  text-align: center;
  font-size: ${sizeText4};

  span {
    display: block;
    font-size: ${sizeText5};
    color: #fff;
  }
`;

export {
  ContainerHero,
  TituloHero,
  DescriptionHero
}