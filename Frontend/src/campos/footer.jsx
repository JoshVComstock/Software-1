import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Footerr=styled.footer`
width: 100%;
height: 300px;

`;
const Imgfooter=styled.img`
  width  :100%;
  height: 300px;
  position: absolute;
  z-index: -10;
`;
const Divfooterrow=styled.div`
  display  :flex ;
  
  border-bottom: 1px solid black;
`;
const Row1=styled.div`
    width: 30%;
    top: 30px;
    font-size: 25px;
    
`;
const Row2=styled.div`
   width: 30%;
   font-size: 20px;
    margin-top:20px;
    margin: 15px;
`;
const List=styled.li`
    text-decoration: none;
    margin-top: 20px;
   

`;
const Row3=styled.div`
    
`;
const A=styled.a` 
  text-decoration: none;
    color: black;
    font-size: 20px;
    margin-left: 20px;
   
    
`;
const Divdatos=styled.div`
    display: flex;
    margin: 0px 20px;
    margin-top: 50px;
`;
const Divtexto=styled.div`
    margin-top: 20px;
`;
const Footer=()=> {
  return(
    <div>
        <Footerr>
            <Imgfooter src="./src/img/footer.png" alt="" />
            <Divfooterrow>
                <Row1>
                Nuestra misión es proporcionar una educación gratuita de clase mundial para cualquier persona en cualquier lugar.
                </Row1>
                <Row2>
                 <ul>
                    <List><A href="#">Unifranz</A></List>
                    <List><A href="#">Portal estudiantil</A></List>
                    <List><A href="#">Centros de ayuda</A></List>
                    <List><A href="#">Informacion adicional</A></List>
                 </ul>
                </Row2>
                <Row3>
                   <h1>Contactos</h1>
                   <Divtexto>
                    <p>-Jose veizaga</p><p>+591 68540820</p>
                    <p>-Diego</p><p>+591 67440332</p>
                    <p>-inge. fabiola</p><p>+591 76492410</p>
                   </Divtexto>
                </Row3>
            </Divfooterrow>
            <Divdatos>
                <p>@ 2022 unifranz</p>
                <ul>
                    <Link><A href="#">Termunos de uso</A></Link>
                    <Link><A href="#">Politica de privacidad</A></Link>
                </ul>
            </Divdatos>
        </Footerr>

    </div>
  )
}
export default Footer