import React from "react";
import styled from "styled-components";

const ModalError = ({ setModalError }) => {
  return (
    <>
      <Overlay>
        <ContenedorModal>
          <EncabezadoModal>
            <h2>¡Ups!</h2>
          </EncabezadoModal>
          <BotonCerra>
            <i class="bx bx-x" onClick={() => setModalError(false)}></i>
          </BotonCerra>
          <ErrorModal>
            <h3>Debes introducir un nombre para poder continuar.</h3>
          </ErrorModal>
        </ContenedorModal>
      </Overlay>
    </>
  );
};

export default ModalError;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContenedorModal = styled.article`
  width: 50%;
  min-height: 200px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2);
  padding: 20px;
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #17181C;
  }
`;

const BotonCerra = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #17181C;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f2f2f2;
  }
`;

const ErrorModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`