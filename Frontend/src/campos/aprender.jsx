import React from 'react'
import styled from 'styled-components'
import Footer from './footer';
import { useModal } from '../hooks/useModal';
import Disenoalgoritmo from './Resolucion de problemas/Disenoalgoritmo';
import Operadoresaritmeticos from './Resolucion de problemas/Operadoresaritmeticos';
import Operadoresrelacionales from './Resolucion de problemas/Operadoresrelacionales';
import Operadoreslogicos from './Resolucion de problemas/Operadoreslogicos';
import Razonamientologico from './Resolucion de problemas/Razonamientologico';
import Tarea from './tarea';
import TIposdedatos from './Variables y tipos de datos/TIposdedatos';
import Diagramafrujo from './Variables y tipos de datos/Diagramafrujo';
import Estructuracondicional from './Variables y tipos de datos/Estructuracondicional';
import Estructuraiterativa from './Variables y tipos de datos/Estructuraiterativa';
import Programacionestructurada from './Procesos de trabajo/Programacionestructurada';
import Variables from './java script/variables';

const Aprender=()=> {
  
    const {openModal:disenoalgoritmo ,closeModal:disenoalgoritmoclose}=useModal('Diseño de algoritmos',<Disenoalgoritmo/>);
    const {openModal:operadorarit,closeModal:operadoraritclose}=useModal('Operadores aritmetiocos',<Operadoresaritmeticos/>);
    const {openModal:operadorrelaci,closeModal:operadorrelaciclose}=useModal('Operadores relacionales',<Operadoresrelacionales/>);
    const {openModal:operadoreslogicos,closeModal:operadoreslogicosclose}=useModal('Operadores logicos',<Operadoreslogicos/>);
    const {openModal:razonamientologico,closeModal:razonamientologicoclose}=useModal('Razonamiento logico',<Razonamientologico/>);
    const {openModal:Tiposvariables,closeModal:tiposvariablesclose}=useModal('Tipos de variables',<TIposdedatos/>);
    const {openModal:Diagramaflujoo,closeModal:Diagramaflujooclose}=useModal('Diagrama de flujo de datos',<Diagramafrujo/>);
    const {openModal:estructuracondicional,closeModal:estructuracondicionalclose}=useModal('Estructura condicional',<Estructuracondicional/>);
    const {openModal:estructuraiterativa,closeModal:estructuraiterativaclose}=useModal('Estructura condicional',<Estructuraiterativa/>);
    const {openModal:programacionestructurada,closeModal:programacionestructuradaclose}=useModal('Programacion estructurada',<Programacionestructurada/>);
    const {openModal:variablesjs,closeModal:variablesjsclose}=useModal('Variables en javascript',<Variables/>);

    return (
    <div>
      <Headertitulo>
        <H1> Logica de programacion </H1>
      </Headertitulo>
      <Divsecciones>
        <Section1>
          <H1tema>Temas</H1tema>
          <nav>
            <ul>
              <Lia><a href='#'></a>Resolucion de problemas mediante razonamiento</Lia>
              <Lia><a href="#"></a>Conceptos basicos de programacion</Lia>
              <Lia><a href="#"></a>Procesos de trabajo</Lia>
              <Lia><a href="#"></a>Diseño de pseudocodigo </Lia>
              <Lia><a href="#"></a>Java script </Lia>

          
              
              </ul>
          </nav>
        </Section1>
        <section>
          <Divcardtotal>
            <H1tema>Teoria</H1tema>
          <Divcard>
            <Divtitulocard>
              <Imglogo src="./src/img/programacion.png" alt="" />
              <h1>Resolucion de problemas mediante razonamiento</h1>
            </Divtitulocard> 
            <Divlinks>
              <ul>
                <Licard><Acard href="#" onClick={disenoalgoritmo}>Diseño de algoritmos</Acard></Licard>
                <Licard><Acard href="#" onClick={operadorarit}>Operadores aritmeticos</Acard></Licard>
                <Licard><Acard href="#" onClick={operadorrelaci} >Operadores relacionales</Acard></Licard>
                <Licard><Acard href="#" onClick={operadoreslogicos}>Operadores logicos</Acard></Licard>
                <Licard><Acard href="#" onClick={razonamientologico}>Razonamiento logico</Acard></Licard>
              </ul>
              <div>
                <Botonprueba>Evaluacion</Botonprueba>
              </div>
            </Divlinks>           
          </Divcard>
          <Divcard>
            <Divtitulocard>
              <Imglogo src="./src/img/aprender 1.png" alt="" />
              <h1>Conceptos basicos de programacion</h1>
            </Divtitulocard> 
            <Divlinks>
              <ul>
                <Licard><Acard href="#" onClick={Tiposvariables}>Tipos de datos y variables</Acard></Licard>
                <Licard><Acard href="#" onClick={Diagramaflujoo}>Diagrama de flujo de datos</Acard></Licard>
                <Licard><Acard href="#" onClick={estructuracondicional}>Estructura condicional</Acard></Licard>
                <Licard><Acard href="#"onClick={estructuraiterativa} >Estructura iterativa</Acard></Licard>
              </ul>
              <div>
                <Botonprueba>Evaluacion</Botonprueba>
              </div>
            </Divlinks>           
          </Divcard>
          <Divcard>
            <Divtitulocard>
              <Imglogo src="./src/img/aprender 3.png" alt="" />
              <h1>Procesos de trabajo</h1>
            </Divtitulocard> 
            <Divlinks>
              <ul>
                <Licard><Acard href="#" onClick={programacionestructurada}>El paradigma de la programacion estructurada</Acard></Licard>
              </ul>
              <div>
                <Botonprueba>Evaluacion</Botonprueba>
              </div>
            </Divlinks>           
          </Divcard>
          <Divcard>
            <Divtitulocard>
              <Imglogo src="./src/img/aprender 4.png" alt="" />
              <h1>Diseño de pseudocodigo</h1>
            </Divtitulocard> 
            <Divlinks>
              <ul>
                <Licard><Acard href="#">Introduccion</Acard></Licard>
                <Licard><Acard href="#">Tipos de sentencias</Acard></Licard>
                <Licard><Acard href="#">Introduccion de datos</Acard></Licard>
                </ul>
                <div>
                <Botonprueba>Evaluacion</Botonprueba>
              </div>
            </Divlinks>           
          </Divcard>  
          <Divcard>
            <Divtitulocard>
              <Imglogo src="data:image/png;base64,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" alt="" />
              <h1>Java script</h1>
            </Divtitulocard> 
            <Divlinks>
              <ul>
                <Licard><Acard href="#" onClick={variablesjs}>Variables</Acard></Licard>
                <Licard><Acard href="#">Tipos de sentencias</Acard></Licard>
                <Licard><Acard href="#">Introduccion de datos</Acard></Licard>
                </ul>
                <div>
                <Botonprueba>Evaluacion</Botonprueba>
              </div>
            </Divlinks>           
          </Divcard>
          </Divcardtotal>
        </section>
      </Divsecciones>
      <Tarea/>
      <Footer/>
    </div>
  )
}

export default Aprender

const Headertitulo=styled.header`
  height: 100px;

`;
const H1=styled.h1`
  font-size: 40px;
  margin-left: 20px;
  color: #03045e;
  padding-top: 20px;
`;
const Divsecciones=styled.section`
 display: flex;
`;
const Section1=styled.section`
 width: 30%;
 margin-left: 30px;
 border-right: 1px solid rgba(0,0,0,.2);
 height: 380px;

`;
const H1tema=styled.h1`
  font-size: 30px;
  padding: 10px;
`;
const Lia=styled.li`
  margin-top: 15px;
  list-style: none;
  padding:  10px 20px 10px;
  border-left: 1px solid black;
  border-radius:7px;
  transition: .4s;
  cursor: pointer;
  &:hover{
    transition: .4s;
    padding-left: 30px;
    border-left: 4px solid black;
  }
`;
const Divcard=styled.div`
width: 700px;
height:300px;
border: 1px solid rgba(0,0,0,.3);
border-radius: 8px;
margin:20px 20px;
`;
const Imglogo=styled.img`
width:50px;
height:50px;
`;
const Divtitulocard=styled.div`
  display: flex;
  align-items: center;
  padding:5px;
  border-bottom: 1px solid rgba(0,0,0,.2);
  margin: 5px;
 
`;
const Licard=styled.li`
 list-style: none;
 margin:20px 20px;
 transition: .4s;
 
 

 &:hover{
  padding-left:15px ;
  transition: .4s;
  text-decoration: underline;
  
 }
`;
const Acard=styled.a`
 text-decoration: none;
 color: #000;
 
`;
const Divcardtotal=styled.div`
height: 600px;
overflow:scroll;
width: 750px;
padding: 5px;
 
`;
const Divlinks=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 10px;
`;
const Botonprueba=styled.button`
  padding: 6px;
  border-radius: 10px ;
  cursor: pointer;
  border: none;
 color: #03045e;
  
  font-size: 20px;
`;