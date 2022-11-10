import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Spooky Monster";
  src: 
      local("Spooky Monster"),
      url("/fonts/shlop.woff2") format("woff2"),
      url("/fonts/SpookyMonster.woff") format("woff"), 
      url("/fonts/SpookyMonster.ttf") format("truetype"),
      url("/fonts/SpookyMonster.otf") format("opentype");
  }

  @font-face {
  font-family: "Roboto";
  src: 
      local("Roboto"),
      url("/fonts/Roboto.woff2") format("woff2"),
      url("/fonts/Roboto.woff") format("woff"), 
      url("/fonts/Roboto.ttf") format("truetype"),
      url("/fonts/Roboto.otf") format("opentype");
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #202329;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  main {
    scroll-margin-top: 30px;
  }
`; 

const GlobalVariable = {
  sizeText1: "clamp(0.91rem, calc(0.89rem + 0.10vw), 0.96rem)",
  sizeText2: "clamp(1.09rem, calc(1.05rem + 0.21vw), 1.20rem)",
  sizeText3: "clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem)",
  sizeText4: "clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem)",
  sizeText5: "clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem)",
  sizeText6: "clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem)",
  sizeText7: "clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem)",
  sizeText8: "clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem)"
}

const Contenedor = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 30px;

  @media (min-width: 768px) {
    padding: 0 10px;
  }
  /* @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  } */
`;

export {
  GlobalStyle,
  GlobalVariable,
  Contenedor
};