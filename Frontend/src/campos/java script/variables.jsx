import React from 'react'
import styled from 'styled-components'

const Variables = () => {
  return (
    <Container>
      <H2>Tipos de variables</H2>
      <P>
      JavaScript tiene tres tipos de declaraciones de variables.
      </P>
      <H2>var</H2>
      <H2>let</H2>
      <H2>const</H2>
      <br />
      <H2>Como inicializar una variable</H2>
      <P>
      Un identificador de JavaScript debe comenzar con una letra, un guión bajo (_) o un signo de dólar ($). Los siguientes caracteres también pueden ser dígitos (0-9).

      Dado que JavaScript distingue entre mayúsculas y minúsculas, las letras incluyen los caracteres "A" a "Z" (mayúsculas), así como "a" a "z" (minúsculas).
        </P>
      <H2>Declaracion de una variable</H2>
      <P>
      •Con la palabra clave <strong>var</strong>. Por ejemplo, var x = 42. Esta sintaxis se puede utilizar para declarar variables locales y globales, dependiendo del contexto de ejecución. <br />
     •Con la palabra clave <strong>const</strong> o <strong>let</strong>. Por ejemplo, let y = 13. Esta sintaxis se puede utilizar para declarar una variable local con ámbito de bloque. (Ve el Ámbito de variables abajo.)
      </P>
      <br />
      <H2>Ejemplo</H2>
      <Img src="../src/img/variabljs.png" alt="" />
      
    </Container>
  )
}

export default Variables
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
  width: 500px;
`;
