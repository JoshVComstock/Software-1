import React from 'react'
import styled from 'styled-components'

const Operadoreslogicos = () => {
  return (
    <Container>
      <H2>Operadores logicos</H2>
      <P>Devuelve un valor logico <strong>True</strong> si ambos operandos son ciertos.
      en caso contrario el resultado es <strong>False</strong></P>
      <Divparrafo>
        <P>► <strong>& (AND)</strong>El resultado es verdadero si ambas expresiones son verdaderas</P>
       <img src="./src/img/and.png" alt="" />
        <P>► <strong>|| (OR)</strong>El resultado es verdadero si alguna expresion es verdadera</P>
        <img src="./src/img/or.png" alt="" />
        <P>► <strong>~ (NOT)</strong>El resuitado invierte la condificion de la expresion</P>
        <img src="./src/img/not.png" alt="" />
      </Divparrafo>

    </Container>
  )
}

export default Operadoreslogicos
const Container = styled.div`
  overflow: scroll;
  width: 650px;
  height: 400px;
  cursor: default;
`;
const P = styled.p`
  font-size: 20px;
  padding: 5px;
  text-align: justify;
  line-height: 2;
`;
const H2 = styled.h2`
  margin-top: 30px;
  font-size: 40px;
`;
const Divparrafo = styled.div`
  margin-top: 20px;
`;