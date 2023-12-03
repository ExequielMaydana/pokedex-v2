import React from "react";
import styled from "styled-components";

const ModalError = ({ setModalError }) => {
  return (
    <>
      <Overlay>
        <ContenedorModal>
          <EncabezadoModal>
            <h2>¡Ups!</h2>
            <BotonCerra>
              <i className="bx bx-x" onClick={() => setModalError(false)}></i>
            </BotonCerra>
          </EncabezadoModal>
          <Content>
            <h3>Debes introducir un nombre para poder continuar.</h3>
            <Btn onClick={() => setModalError(false)}>Entendido</Btn>
          </Content>
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
  z-index: 999;
`;

const ContenedorModal = styled.article`
  width: min(90%, 500px);
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
    color: #17181c;
  }
`;

const BotonCerra = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #17181c;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f2f2f2;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
`;

const Btn = styled.button`
  padding: 0.5em 1em;
  border: 1px solid #000;
  border-radius: 8px;
  background: none;
  font-weight: 600;
  cursor: pointer;
`;
