import React from "react";
import styled from "styled-components";
const Estructuraiterativa = () => {
  return (
    <Container>
      <H2>Estructura iterativa</H2>
      <P>
        instrucciones de repetición, de iteración o bucles, facilitan la
        repetición de un bloque de instrucciones, un número determinado de veces
        o mientras se cumpla una condición. Por lo general, existen dos tipos de
        estructuras iterativas o bucles en los lenguajes de programación
      </P>
      <H2>Blucle For</H2>

      <P>
        El bucle for es una estructura iterativa que se ejecuta un número
        preestablecido de veces, que es controlado por un contador o índice,
        incrementado en cada iteración.{" "}
      </P>
      <Img
        src="https://rsanchezs.gitbooks.io/ciencia-de-datos-con-r/content/estructuras_control/images/for.png"
        alt=""
      />
      <P>
        Una o mas instrucciones dentro del rectángulo de inicialización son
        seguidas por la evaluación de la condición en una variable la cual puede
        asumir valores dentro de una secuencia. En la figura, esto es
        representado por el símbolo del rombo.{" "}
      </P>
      <br />
      <H2>Bucle While</H2>
      <P>
        Cuando nos encontramos en la situación en la que no conocemos el número
        de iteraciones de antemano, podemos hacer uso del bucle while. Este
        bucle se ejecuta mientras se cumple una condición que se comprueba al
        principio de la construcción.
      </P>
      <Img
        src="https://rsanchezs.gitbooks.io/ciencia-de-datos-con-r/content/estructuras_control/images/while.png"
        alt=""
      />
      <P>
        La estructura de una construcción while está compuesta de un bloque de
        inicialización, seguido por una condición lógica{" "}
      </P>
      <br />
      <H2>Bucle Repeat</H2>
      <P>
        El bucle repeat es similar a while, excepto que la instrucción o bloque
        de instrucciones de repeat es ejecutado al menos una vez, sin importar
        cual es el resultado de la condición.{" "}
      </P>
      <Img
        src="https://rsanchezs.gitbooks.io/ciencia-de-datos-con-r/content/estructuras_control/images/repeat.png"
        alt=""
      />
      <br />
      <H2>Clausula break</H2>
      <P>
        La instrucción break se utiliza con las instrucciones de bucle for,
        while y repeat. La cláusula break finaliza la ejecución del bucle más
        próximo en el que aparece. El control pasa a la instrucción que hay a
        continuación del final de la instrucción, si hay alguna.
      </P>
      <Img
        src="https://rsanchezs.gitbooks.io/ciencia-de-datos-con-r/content/estructuras_control/images/break.png"
        alt=""
      />
    </Container>
  );
};

export default Estructuraiterativa;
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
const Img=styled.img`
  width: 300px;
`;