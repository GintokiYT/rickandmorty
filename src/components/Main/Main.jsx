import { useEffect, useContext, useState } from "react";
import { ContainerMain, ContainerPaginador } from "./Main.elements";

// Componentes
import Cards from "../card/Cards";

// React Icons
import { BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs";

// UseContext
import CharacterContext from "../context/character/CharacterContext";

const Main = () => {

  const { getData, info, characters } = useContext(CharacterContext);

  const [ busqueda, setBusqueda ] = useState("");

  const handleClickNext = () => {
    if(info.next !== null) {
      getData(info.next);
    }
  }

  const handleClickPrev = () => {
    if(info.prev !== null) {
      getData(info.prev)
    }
  }

  const changeBusquedaNombre = (e) => {
    setBusqueda(e.target.value);
    getData(`https://rickandmortyapi.com/api/character/?name=${busqueda}`);
  } 

  const changeBusquedaEstado = (e) => {
    const value = e.target.value;
    getData(`https://rickandmortyapi.com/api/character/?status=${value}`);
  }

  const changeBusquedaEspecie = (e) => {
    const value = e.target.value;
    getData(`https://rickandmortyapi.com/api/character/?species=${value}`)
  }

  useEffect(() => {
    if(characters.length === 0) {
      getData("https://rickandmortyapi.com/api/character?page=1");
    }
  }, [characters])

  return (  
    <ContainerMain id="principal">
      <h2 className="title">Personajes</h2>
      <div className="ContainerBusqueda">
        <input 
          type="text" 
          placeholder="Ingrese el nombre del personaje"
          onChange={changeBusquedaNombre}
        />
        <select 
          onChange={changeBusquedaEstado}
        > 
          <option value="">Seleccione un estado</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
        <select
          onChange={changeBusquedaEspecie}
        >
          <option value="">Seleccione un especie</option>
          <option value="Human">Humano</option>
          <option value="Alien">Alienígena</option>
          <option value="Mythological Creature">Criatura Mitologica</option>
          <option value="robot">Robot</option>
          <option value="disease">Enfermedades</option>
          <option value="animal">Animal</option>
          <option value="Poopybutthole">Poopybutthole</option>
          <option value="Cronenberg">Cronenberg</option>
        </select>
      </div>
      <Cards/>
      <ContainerPaginador >
        <div className="prev">
          <a href="#principal">
            <BsFillSkipStartFill 
              onClick={handleClickPrev}
            />
          </a>
        </div>
        <div className="next">
          <a href="#principal">
            <BsFillSkipEndFill 
              onClick={handleClickNext}
            />
          </a>
        </div>
      </ContainerPaginador>
    </ContainerMain>
  );
}
 
export default Main;