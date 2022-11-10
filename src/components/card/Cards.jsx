import { useContext } from "react";

import { Contenedor } from "../../GlobalStyles";
import { ContainerCards } from "./Cards.elements";

import Card from "./card";

import CharacterContext from "../context/character/CharacterContext";

const Cards = () => {

  const { characters } = useContext(CharacterContext);
  
  return (  
    <Contenedor>
      <ContainerCards>
        { characters.map(character => {
          return (
            <Card key={character.id} character={character}/>
          )
        })}
      </ContainerCards>
    </Contenedor>
  );
}
 
export default Cards;