import { GET_CHARACTERS, GET_INFO } from "../types"; 

export default (state, action) => {

  const { payload, type } = action;

  switch(type) {
    case GET_INFO:
      return {
        ...state,
        info: payload
      }
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload
      }
  }
}