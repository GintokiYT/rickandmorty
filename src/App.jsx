import CharacterState from "./components/context/character/CharacterState";

// Componentes
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/footer/Footer";

import { GlobalStyle } from "./GlobalStyles";

const App = () => {

  

  return (
    <CharacterState>
      <GlobalStyle />
      <Hero />
      <Main />
      <Footer />
    </CharacterState>
  )
}

export default App
