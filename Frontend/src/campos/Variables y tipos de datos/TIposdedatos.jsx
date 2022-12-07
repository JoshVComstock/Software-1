import React from "react";
import styled from "styled-components";

const TIposdedatos = () => {
  return (
    <Container>
      <H2>Tipos de datos</H2>
      <P>
        Es la propiedad de un valor que determinas su dominio o indica un valor
        que se le asigna a las cosas y se representa a traves de una secuencia
        de simbolos, numero o letras.
      </P>
      <H2>Numerico</H2>
      <br />
      <H2>Numero enteros</H2>
      <P>
        El tipo <strong>int</strong> permite representar numero enteros. los
        valores que puede tomar un int son los numero enteros. Ejemplo:
        <strong>-3, -2 ,-1, 0, 1, 2, ...</strong>
      </P>
      <H2>Numeros reales</H2>
      <P>
        El tipo <strong>float</strong> permite representar numeros reales Los
        numero reales literales se escriben separando la parte entera del
        decimal con un punto. Ejemplo:
        <strong>561.1545, 589.255, 25.125, ...</strong>
      </P>
      <br />
      <H2>Texto</H2>
      <br />
      <H2>Caracteres</H2>
      <P>
        Tipo de <strong>char</strong> formado por una unidad o simbolo que puede
        ser una letra, un numero, una mayuscula o un signo de puntuacion.
        Ejemplo:<strong>a, x, 2, 1, @, Þ, ~, ...</strong>
      </P>
      <H2>Cadena</H2>
      <P>
        Tipo de <strong>string</strong> formado por un con conjuto de caracteres
        dispuestos de forma consecutiva que se representa entre comillas.
        Ejemplo:
        <strong>
          "ejemplo 1", 'ejemplo 2', "Let's go!", 'Ella dijo "hola"'
        </strong>
      </P>
      <br />
      <H2>Logicos</H2>
      <br />
      <H2>Bolean</H2>
      <P>
        Tipo de <strong>bool</strong> que puede representar dos valores:
        verdadero o falso. Ejemplo:
        <strong> 5 == '5' 
                False
                True == 'True'
               False</strong>
      </P>
    </Container>
  );
};

export default TIposdedatos;
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
