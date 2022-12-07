import React from 'react'
import styled from 'styled-components'
import Aprender from './aprender';

const H1=styled.h1`
  text-align: center;
  background: #03045e;
  color: transparent;
  -webkit-background-clip:text;
  background-clip: text;
  font-size: 3.5rem;
  text-transform: uppercase;
  padding: 1rem;
`;
const Divcajapadre=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
`;
const Divcaja=styled.div`
  flex:1 1 30rem ;
  background  :white ;
  border-radius: .5rem;
  border:0.1rem solid rgba(0,0,0,0.1);
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
  margin: 1.5rem;
  padding: 3rem 2rem;
  text-align: center;
  transition: .2s linear;
  max-width: 450px;
  height: 600px;
  transition: 0.5s;
`;
const H1caja=styled.h1`
  font-size: 2rem;
  color: #333;
  padding-top: 1rem;
`;
const Pcaja=styled.p`
  font-size: 1.3rem;
  color: #666;
  padding: 1rem 0;
`;
const Imgcaja=styled.img`
  width: 250px;
  height: 250px;
`;
const Capsulas=()=> {
  return (
    <div>
      <section>
        <H1>Funciones</H1>
        <Divcajapadre>

          <Divcaja className='cajacapsulas'>
            <Imgcaja src="src\img\imagen1.png" alt="" />
            <H1caja>Algoritmo</H1caja>
            <Pcaja>Es la propia secuencia de instrucciones para la ejecución de una tarea. </Pcaja>
            <a href="https://profile.es/blog/que-es-un-algoritmo-informatico/#%C2%BFQue_es_un_algoritmo_informatico" className='Abotoninicio'> Ver mas</a>
          </Divcaja>
          
          <Divcaja className='cajacapsulas'>
            <Imgcaja src="src\img\imagen2.png" alt="" />
            <H1caja>Logica de programacion</H1caja>
            <Pcaja>Es la organización coherente de las instrucciones del programa para que su objetivo sea alcanzado </Pcaja>
            <a href='#' className='Abotoninicio'> Ver mas</a>
          </Divcaja>
          
          <Divcaja className='cajacapsulas'>
            <Imgcaja src="src\img\diagrama.png" alt="" />
            <H1caja>Diagrama de flujo</H1caja>
            <Pcaja>Es una infraestructura para un conjunto de tareas que fluirá automáticamente de una a otra hasta que el proceso se realice de la manera más eficiente posible. .</Pcaja>
            <a href="https://profile.es/blog/que-es-un-algoritmo-informatico/#%C2%BFQue_es_un_algoritmo_informatico" className='Abotoninicio'> Ver mas</a>
          </Divcaja>

        </Divcajapadre>
      </section>

    </div>
  )
}

export default Capsulas