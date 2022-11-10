import { motion } from "framer-motion";
import { ContainerCard, ContainerImg, ContainerDescription, ContainerEstado, ContainerUbicacion, ContainerOrigin } from "./Cards.elements";

const Card = ({character}) => {

  if(!character) {
    return null;
  }

  return (
    <ContainerCard as={motion.div}
      whileHover={{
        scale: 1.1,
        transition: { duration: .3 },
      }}
    >
      <ContainerImg>
        <img src={character.image} alt="" />
      </ContainerImg>
      <ContainerDescription>
        <ContainerEstado>
          <h2>{character.name}</h2>
          <span className={`estado ${character.status}`}></span>
          <span className="description">{character.status} - {character.species}</span>
        </ContainerEstado>
        <ContainerUbicacion>
          <div className="info">
            <p className="titulo">Última ubicación conocida</p>
            <p className="detalles">{character.location.name}</p>
          </div>
        </ContainerUbicacion>
        <ContainerOrigin>
          <div className="info">
            <p className="titulo">
              Origen del personaje:
            </p>
            <p className="detalles">
              {character.origin.name}
            </p>
          </div>
        </ContainerOrigin>
      </ContainerDescription>
    </ContainerCard>
  )
}
 
export default Card;