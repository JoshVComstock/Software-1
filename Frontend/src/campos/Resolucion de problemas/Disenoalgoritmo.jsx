import React from 'react'
import styled from 'styled-components'

const Disenoalgoritmo = () => {
  return (
    <Div>
      <P>La palabra algoritmo se proviene del nombre matematico y astronomo Alkhowarizmi quien escribio un trato sobre las manipulaciones de numeros y ecuaciones.</P>
      <P>Un algoritmo es un conjunto finito de pasos definidos, estructurados en el tiempo y formulados
        con base a conjunto finito de reglas no ambiguas, que proveen un procedimiento para dar la solucion o indicar la falta de esta a un problema en un tiempo determnado.
      </P>
      <H2><strong>Caracteristicas de un algoritmo</strong></H2>
      <Divparrafo>
        <h3><strong>Preciso:</strong></h3>
        <P>al indicar el orden en que se deben realizar los paso.</P>
        <h3><strong>Definido:</strong></h3>
        <P>al seguir el algoritmo varias veces con los musmos datos de entrada los resultados siempre deben ser los mismo.</P>
        <h3><strong>Finito:</strong></h3>
        <P>deben tener un numero de pasos finito, es deicr, terminar en algun momento.</P>
      </Divparrafo>
      <H2><strong>Partes de un algoritmo</strong></H2>
      <Divparrafo>
        <h3><strong>Entrada:</strong></h3>
        <P>es la informacion a los valores que se da para ser procesada.</P>
        <h3><strong>Proceso:</strong></h3>
        <P>son las operaciones o calculos que se realizan con los datos de entrada.</P>
        <h3><strong>Salida:</strong></h3>
        <P>es el resultado de las operaciones realizadas.</P>
      </Divparrafo>
    </Div>
  )
}

export default Disenoalgoritmo

const Div=styled.div`
  overflow: scroll;
  width: 650px;
  height: 400px;
  cursor:default;
`;
const P=styled.p`
  font-size: 20px;
  padding: 5px;
  text-align: justify;
  line-height: 2;
`;
const H2=styled.h2`
margin-top:30px ;
  font-size: 40px;
`;
const Divparrafo=styled.div`
margin-top: 20px;
  
`;