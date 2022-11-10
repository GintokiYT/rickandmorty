import styled from "styled-components";
import { GlobalVariable } from "../../GlobalStyles";

const { sizeText3 } = GlobalVariable;
 
const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const ContainerCard = styled.div`
  width: 100%;
  max-width: 375px;
  height: 530px;
  display: flex;
  flex-direction: column;
  background-color: #393B41;
  color: #ffffff;
  border-radius: 10px;
  overflow: hidden;

  @media (min-width: 650px) {
    min-width: 600px;
    flex-direction: row;
    height: 220px;
  }
`;

const ContainerImg = styled.div`
  img {
    height: 100%;
    max-height: 300px;
    object-fit: cover;
    object-position: center center;

    @media (min-width: 650px) {
      flex: 2 1 0%;
      width: 100%;
    }
  }
`;

const ContainerDescription = styled.div`
  position: relative;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 650px) {
    flex: 3 1 0%;
    width: 100%;
  }
  
  * {
    flex: 1;
  }
`;

const ContainerEstado = styled.div`
  color: #fff;
    
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${sizeText3};
    padding: 0;
    text-align: left;
    letter-spacing: 0;
    margin: 10px 0;
  }

  .estado {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
  }

  /* Estados de los personajes */
  .Alive {
    background-color: #49ba4f;
  }
  .Dead {
    background-color: #de2e2e;
  }
  .unknown {
    background-color: #9e9e9e;
  }
`;

const ContainerUbicacion = styled.div`
  display: flex;
  align-items: center;

  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .titulo {
      color: #9e9e9e;
    }

    .detalles {
      color: #ffffff;
    }
  }
`;

const ContainerOrigin = styled.div`
  display: flex;
  align-items: center;

  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .titulo {
      color: #9e9e9e;
    }

    .detalles {
      color: #ffffff;
    }
  }
`;

export {
  ContainerCards,
  ContainerCard,
  ContainerImg,
  ContainerDescription,
  ContainerEstado,
  ContainerUbicacion,
  ContainerOrigin
}