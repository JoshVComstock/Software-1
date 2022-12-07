import React from 'react'
import styled from 'styled-components'

const Razonamientologico = () => {
  return (
    <Container>
      <H2>Razonamiento logico</H2>
      <P>Comprende la habilidad para resolver problemas mediante la reflexión, prever y hacer planes. 
        El pensamiento lógico procedente de la inteligencia formal, tiende a obtener una conclusión particular de datos generales o una conclusión general de datos particulares.
      </P>
      <H2>Problemas de razonamiento</H2>
      <Divparrafo>
        <H2>Ejercicos 1</H2>
        <P>El cuadrado esta compuesto por 12 monedas.
          ¿Cuantas monedas se tiene que cambiar de lugar de tal manera que se forme un cuadrado 
          que presnete seis monedas en cada lado?
        </P>
        <Pregunta>
          <img src="./src/img/problema1.png" alt="" />
          <div>
            <P>6
              <input type="radio" name="" id="" />
            </P>
            <P>5
              <input type="radio" name="" id="" />
            </P>
            <P>8
              <input type="radio" name="" id="" />
            </P>
            <P>7
              <input type="radio" name="" id="" />
            </P>
            <P>9
              <input type="radio" name="" id="" />
            </P>
          </div>
        </Pregunta>
      </Divparrafo>
      <Divparrafo>
      <H2>Ejercicos 2</H2>
        <P>En una laguna se observa a varios patos.
        Un pato estaba delante de 2 patos, un pato
        entre 2 patos, y un pato, detras de 2 patos.
         ¿Cuantos patos habia, como minimo en la laguna?</P>
        <Pregunta>
          <P>2<input type="radio" /></P>
          <P>3<input type="radio" /></P>
          <P>4<input type="radio" /></P>
          <P>5<input type="radio" /></P>
          <P>6<input type="radio" /></P>
        </Pregunta>
      </Divparrafo>

    </Container>
  )
}

export default Razonamientologico
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
const Pregunta=styled.div`
  display: flex;
  justify-content: space-around;
`;