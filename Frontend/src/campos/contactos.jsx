import React from "react";
import styled from "styled-components";
import Consulta from "./consulta";

const Titulocontactos = styled.section`
  max-width: 100%;
  height: 100%;
`;
const Divfondo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(../src/img/soporte.png) no-repeat;
`;
const P=styled.p`
  width: 700px;
  text-align: right;
  margin-left: 800px;
  font-size: 100px;
`;
const Contactos = () => {
  return (
    <Divfondo>
      <Titulocontactos>
        <H1>Contactos</H1>
        <P>Cualquier consulta no dude en hacernoslo saber</P>
      </Titulocontactos>
      <Consulta/>
    </Divfondo>
  );
};
export default Contactos;
const H1 = styled.h1`
  font-size: 50px;
  margin-left: 20px;
  color: #03045e;
  padding-top: 20px;
`;
const Divp=styled.div`

  max-width: 100%;
  display: flex;
  justify-content: left;
align-content: center;
`;

