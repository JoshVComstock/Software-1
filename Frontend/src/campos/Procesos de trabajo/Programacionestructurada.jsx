import React from 'react'
import styled from 'styled-components'

const Programacionestructurada = () => {
  return (
    <Container>
      <H2>Qué es la programación estructurada</H2>
      <P>
      se establece como paradigma de programación en torno a los años 70, siendo uno de sus principales padres Dijkstra, con el objetivo de mejorar las prácticas de programación y facilitar la creación de programas más complejos, aumentando también la facilidad de mantenimiento del software.
      Consiste en un estilo de programación en el que encontramos las estructuras básicas ya conocidas en los lenguajes de programación anteriores, como ciclos y condicionales, a los que se le añade la posibilidad de ejecutar subrutinas o funciones.
      </P>
      
      <P><strong>Nos ayuda</strong> <br />
      •Capacidad de organización jerárquica del código. Unas funciones principales llaman a otras funciones secundarias y éstas llaman a otras, creando una jerarquía de funciones fácilmente entendibles.<br />
      •Permiten la abstracción, evitando que el programador necesite entender todo el código como un único bloque.<br />
      •Aumenta la capacidad de depuración, ya que cada una de las unidades "función" se pueden probar por separado.<br />
      •Se puede aumentar drásticamente el número de líneas de las aplicaciones sin que éstas se vuelvan un caos.<br />
      •Aumenta la velocidad de desarrollo y, además, la capacidad de que varias personas puedan participar en el desarrollo de un proyecto.<br />
      •Todo ello reduce la complejidad del software y los costes de desarrollo.
      </P>
      <H2>Tipos de funciones</H2>
      <P>
      A las subrutinas, el concepto que hoy conocemos por simplemente como "funciones", algunos lenguajes de programación lo dividieron en dos tipos de estructuras: <br />
      
      •Las <strong>funciones</strong> tenían la particularidad de devolver valores.<br />
    •Los <strong>procedimientos</strong> realizaban procesos pero no devolvían ningún valor.<br /></P>
    <H2>Se usa la programacion estructurada</H2>
      <P>
      Aunque la programación estructurada es algo que ya viene de lejos hoy en día todavía es altamente usada en muchos proyectos y son la base de la mayoría de los lenguajes de programación actuales. De hecho, muchos lenguajes populares como Javascript o PHP la fomentan de base, igual aunque también incorporan otros paradigmas distintos. </P>
      <br />
     <Img src="https://storage.googleapis.com/ilerna_media-cloud/2019/11/IZY5d5K0-if-esquemas-gris.jpg" alt="" />
    </Container>
  )
}

export default Programacionestructurada
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
