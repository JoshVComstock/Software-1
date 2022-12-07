import React from 'react'
import styled from 'styled-components'

const Operadoresrelacionales = () => {
  return (
    <Container>
      <H2>Operadores relacionales</H2>
      <P>Son simbolos que se usan para comparar dos valores.
        si el resultado de la compacion es correcta la expresion considerarda es verdadera,
        en caso contrario es falsa.
      </P>
      <img src="./src/img/relacionales.jpg" alt="" />
      <P>Los operadores relacionales tienen asociatividad de izquierda a derecha. 
        Ambos operandos de los operadores relacionales deben ser de tipo aritmética.
         Producen valores de tipo bool. El valor devuelto es false (0) si la relación de la expresión es falsa; si no, el valor devuelto es true (1).

      </P>
    </Container>
  )
}

export default Operadoresrelacionales
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