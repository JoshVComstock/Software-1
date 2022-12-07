import React from "react";
import styled from "styled-components";
import Capsulas from "./capsulas";
import Consulta from "./consulta";
import Footer from "./footer";

const Sectioninicio = styled.section`
  min-height: 100vh;
  padding: 0 9%;
  padding-top: 7.5rem;
  padding-bottom: 2rem;
`;
const H3inicio=styled.h3`
    font-size: 4.5rem;
    color: #03045e;
    text-transform: uppercase;
    cursor: default;
`;
const Spaninicio=styled.span`
    color: #caf0f8;
    text-transform: uppercase;
    font-size: 5.5rem;
    cursor: default;
`;
const Pinicio=styled.p`
font-size: 1.4rem;
color: #666;
padding: 1rem 0;
cursor: default;
`;

const Inicio = () => {
  return (
    <div>
      <Sectioninicio className="sectioninicio">
        <div>
          <H3inicio>Programacion</H3inicio>
          <Spaninicio>Unifranz</Spaninicio>
          <Pinicio>
            "Un programador que escriba un codigo limpio, entiende perfectamente
            el problema antes de escribir el codigo"
          </Pinicio>
          <a href="#" className="Abotoninicio">Mas detalles</a>
        </div>
        <div>
          <img className="imginicio" src="src\img\programador.png" alt="" />
        </div>
      </Sectioninicio>
      <Capsulas/>
      
      <Footer/>

    </div>
  );
};

export default Inicio;
