import React from 'react'
import styled from 'styled-components'

const Estructuracondicional = () => {
  return (
<Container>
      <H2>Condicionales</H2>
      <P>
      sirven para la toma de decisiones en los algoritmos: Si ocurre algo entonces ejecutamos unas sentencias y en caso contrario ejecutamos otras.
      Toda toma de decisión tiene una evaluación a realizar para, en función de ella, tomar la decisión. Esa evaluación generalmente compara una variable con otra o contra otro valor, para que en base al resultado de esta comparación, se siga un curso de acción dentro del programa.
      </P>
      <H2>Estructuras condicionales Simples</H2>
      <P>
      Las estructuras condicionales simples se les conoce como Tomas de decisión y realizan una acción únicamente cuando la expresión a evaluar resulta en un resultado positivo. </P>
      <H2>Pseudocodigo</H2>
      <img src="https://desarrolloweb.com/articulos/images/algoritmos/pseudocodigo_si.gif" alt="" />
      <br />
      <H2>Diagrama de flujo</H2>
<img src="https://desarrolloweb.com/articulos/images/algoritmos/ordinograma_si.gif" alt="" />     
<br />

      <H2>Condificonal doble</H2>
      <P>
      Las estructuras condicionales dobles permiten elegir entre dos opciones o alternativas posibles, en función del cumplimiento o no de una determinada condición </P>
      <H2>Pseudocodigo</H2>
<img src="https://desarrolloweb.com/articulos/images/algoritmos/pseudocodigo_si_doble.gif" alt="" />      <br />
      <H2>Diagrama de flujo</H2>
<img src="https://desarrolloweb.com/articulos/images/algoritmos/ordinograma_si_doble.gif" alt="" /><br />
      <br />
      <H2>Notacion</H2>
      <P>
      <strong>Si:</strong> Indica el comando de comparación<br />
    <strong>Condición:</strong> Indica la condición a evaluar<br />
    <strong>Entonces:</strong> Precede a las acciones a realizar cuando se cumple la condición<br />
    <strong>Instrucción(es):</strong> Son las acciones a realizar cuando se cumple o no la condición<br />
    <strong>Si no:</strong> Precede a las acciones a realizar cuando no se cumple la condición<br />
      </P>
</Container>  )
}

export default Estructuracondicional
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