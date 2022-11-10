import styled from "styled-components";

const ContainerMain = styled.main`
  width: 100%;
  max-width: 1320px;
  margin: 30px auto;

  .title {
    text-align: center;
    color: #fff;
    font-family: "Spooky Monster";
    font-size: 48px;
    margin: 20px 0;
  }

  .ContainerBusqueda {
    width: 100%;
    max-width: 1320px;
    margin: 30px auto;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    input {
      flex: 1;
      font-size: 18px;
      height: 50px;
      border: none;
      outline: none;
      padding: 0 10px;
      border-radius: 5px;
    }

    select {
      flex: 1;
      font-size: 18px;
      height: 50px;
      border: none;
      outline: none;
      padding: 0 10px;
      border-radius: 5px;
    }
  }
`;

const ContainerPaginador = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  svg {
    margin: 0 10px;
    font-size: 50px;
    fill: #fff;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

`;


export {
  ContainerMain,
  ContainerPaginador
}