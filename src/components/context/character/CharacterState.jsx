import { useReducer } from "react";

import CharacterReducer from "./CharacterReducer";
import CharacterContext from "./CharacterContext";

import axios from "axios";

const CharacterState = (props) => {
  const initialState = {
    characters: [],
    info: {},
    frases: [
      {
        id: 1, 
        text: "Nadie existe a propósito. Nadie pertenece a ninguna parte. Todos vamos a morir. Ven a ver la televisión.", 
        autor: "Morty"
      },
      {
        id: 2, 
        text: "¿Les gusta la referencia Redgren Grumbholdt? Sí, bueno…", 
        autor: "Rick"
      },
      {
        id: 3, 
        text: "¡Esos tipos están dentro de ti construyendo un pedazo de mierda Ethan!", 
        autor: "Rick"
      },
      {
        id: 4, 
        text: "Las bodas son básicamente funerales con un pastel.", 
        autor: "Rick"
      },
      {
        id: 5, 
        text: "A veces la ciencia es mucho más arte que ciencia, Morty. Mucha gente no entiende eso.", 
        autor: "Rick"
      },
      {
        id: 6, 
        text: "Pero los discursos son para hacer campaña. Ahora es el momento para la acción.", 
        autor: "Morty"
      },
      {
        id: 7, 
        text: "Estás creciendo, Morty. Creciendo como una enorme espina dentro de mi trasero.", 
        autor: "Rick"
      },
      {
        id: 8, 
        text: "Escucha, Morty, odio decirte esto pero eso que la gente llama «amor» es sólo una reacción química que obliga a los animales a reproducirse. ", 
        autor: "Rick"
      },
      {
        id: 9, 
        text: "Deberías aprender a tener un poco de respeto por los tontos del universo.", 
        autor: "Jerry"
      },
      {
        id: 10, 
        text: "Ni lo entiendo, ni necesito entenderlo.", 
        autor: "Jerry"
      },
    ]
  }

  const [ state, dispatch ] = useReducer(CharacterReducer, initialState);

  const getData = async (url) => {
    try {;
      const response = await axios.get(url);
      dispatch({
        type: "GET_CHARACTERS",
        payload: response.data.results
      })
      dispatch({
        type: "GET_INFO",
        payload: response.data.info
      })
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <CharacterContext.Provider 
      value={{
        info: state.info,
        characters: state.characters,
        frases: state.frases,
        getData,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  )
}

export default CharacterState;