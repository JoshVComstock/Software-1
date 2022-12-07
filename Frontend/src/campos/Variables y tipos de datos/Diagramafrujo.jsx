import React from 'react'
import styled from 'styled-components'
const Diagramafrujo = () => {
  return (
    <Container>
      <H2>Diagrama de Flujo de Datos</H2>
      <P>
      El objetivo del diagrama de flujo de datos es la obtención de un modelo lógico de procesos que represente el sistema, con independencia de las restricciones físicas del entorno. Así se facilita su comprensión por los usuarios y los miembros del equipo de desarrollo.
      </P>
      <H2>Elementos</H2>
      <br />
      <H2>Entidad externa</H2>
      <P>
      representa un ente ajeno al sistema que proporciona o recibe información del mismo. Puede hacer referencia a departamentos, personas, máquinas, recursos u otros sistemas.
      <img src="http://manuel.cillero.es/wp-content/uploads/2013/11/dfd-entidad.png?x71383" alt="" />
      </P>
      <H2>Proceso</H2>
      <P>
      representa una funcionalidad que tiene que llevar a cabo el sistema para transformar o manipular datos. 
      </P>
      <img src="http://manuel.cillero.es/wp-content/uploads/2013/11/dfd-entidad-2.png?x71383" alt="" />
      <H2>Almacén de datos</H2>
      <P>
      representa la información en reposo utilizada por el sistema independientemente del sistema de gestión de datos (por ejemplo un. fichero, base de datos, archivador, etc.).
      </P>
      <img src="https://manuel.cillero.es/wp-content/uploads/2013/11/dfd-almacen.png" alt="" />
      <H2>Flujo de datos</H2>
      <P>
      representa el movimiento de los datos, y establece la comunicación entre los procesos y los almacenes de datos o las entidades externas.
      </P>
      <img src="http://manuel.cillero.es/wp-content/uploads/2013/11/dfd-flujo.png?x71383" alt="" />
      <H2>Proceso de control</H2>
      <P>
      representa procesos que coordinan y sincronizan las actividades de otros procesos del diagrama de flujo de datos.     
       </P>
       <img src="https://manuel.cillero.es/wp-content/uploads/2013/11/dfd-flujo-2.png" alt="" />
      <H2>Flujo de control</H2>
      <P>
      representa el flujo entre un proceso de control y otro proceso. El flujo de control que sale de un proceso de control activa al proceso que lo recibe y el que entra le informa de la situación de un proceso.      </P>
      <br />
      <img src="http://manuel.cillero.es/wp-content/uploads/2013/11/dfd-control.png?x71383" alt="" />
    </Container>
  )
}

export default Diagramafrujo
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