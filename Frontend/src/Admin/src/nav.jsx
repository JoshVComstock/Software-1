import React from "react";
//import './style/nav.css'
import { Link,Outlet} from "react-router-dom";
import styled from "styled-components";
import Portada from "./admin/portada";
import './admin/all.css'


const Linkestilizado=styled(Link)`
  
  font-size: 700;
  color: #03045e;
  margin-top: 30px;
  padding: 9px 25px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease 0s;
 
`;
const Img=styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 0;
  margin-right: 5px;
`;
const Divheader=styled.div`
 min-width: 250px;
 height: 100vh;
 background: ;
 display: flex;
 flex-direction: column;
 background-color:white ;
 box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
`;
const Divconte=styled.div`
display: flex;
flex-direction: row;

`;
const Divlogo=styled.img`
width: 200px;
height: 50px;
margin-top: 20px;
margin-bottom: 50px;
`;

const Nav=()=> {
  return (
 <Divconte>
    <Divheader >
    <Divlogo  src="/vite.svg" />

      
      <Linkestilizado className="link" to="/">
      
      Resultados
      </Linkestilizado>
      <Linkestilizado className="link" to="/contacto">
      Consultas
    </Linkestilizado>
    <Linkestilizado className="link" to="/campo">
      Preguntas
    </Linkestilizado>
  
    
    </Divheader>
    <Outlet  />
 </Divconte>

    
  );
}

export default Nav