import React from 'react'
import styled from 'styled-components'

const Operadoresaritmeticos = () => {
  return (
    <Container>
      <H2>Operadores aritmeticos</H2>
      <Divparrafo>
        <P>Permite realizar operaciones aritmeticas sobre sus operandos.
          Los operadores aritmeticos solo es aplicable a datos enteros.<br/>
          Ejemplo:<strong><br/>15 + 10<br/> 5 - 2<br/> 10 * 3<br/> 5 / 1<br/> 10 % 2</strong>
        </P>
        <img src="./src/img/operadores.png" alt="" />
      </Divparrafo>
      <Divparrafo>
        <H2>Reglas de procedencia</H2>
        <P>Cuando combinan diferentes operadores en una sola linea.<br/>
        Ejemplo:<br/><strong>8 + 3 - 5<br/> 5 * 3 + 1</strong></P>
       <br/>
       <P>Se considera el uso de los parentesis como una mejor practica en reglas de procedencia.<br/>
       Ejemplo:<br/><strong>(5 + 5) / 2<br/>(3 * 2) - 1<br/>(10 - 5) / 10</strong>
       </P>
      </Divparrafo>
    </Container>
    
  )
}

export default Operadoresaritmeticos
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