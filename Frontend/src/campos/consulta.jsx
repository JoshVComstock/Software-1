import React from 'react'
import styled from 'styled-components'
import '../todo.css'

const H1=styled.h1`
  text-align: left;
  background: #03045e;
  color: transparent;
  -webkit-background-clip:text;
  background-clip: text;
  font-size: 3.5rem;
  text-transform: uppercase;
  padding-bottom:2rem ;

`;
const Consultabody=styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 4rem;
`;
const Divimg=styled.div`
  flex  :1 1 40rem ;
  max-width:500px ;
`;
const Img=styled.img`
width: 100%;
padding: 2rem;
`;
const Form=styled.form`
flex: 1 1 40rem;
padding: 2rem 3rem;
border: 0.1rem solid rgba(0,0,0,.2);
box-shadow: 0 0.5rem 1rem rgba(0,0,0,.1);
border-radius: .5rem;
background: #fff;

`;
const Divcaja=styled.div`
  position  :relative ;

`;
const Inputcaja=styled.input`
  width: 100%;
  background: none;
  color: #333;
  margin: 1.5rem 0;
  padding: 0.5rem 0;
  font-size: 1.7rem;
  border:.1rem solid rgba(0,0,0,0.1);
  text-transform: none;
`;
const Textconsulta=styled.textarea`
 width: 100%;
  background: none;
  color: #333;
  margin: 1.5rem 0;
  padding: 0.5rem 0;
  font-size: 1.7rem;
  border-bottom:.1rem solid rgba(0,0,0,.1);
  text-transform: none;
  
`;
const Label=styled.label`
  position: absolute;
  top:2rem;
  left: 0;
  font-size: 1.4rem;
  color: #666;
  transition: .2s linear;
  
`;
const Consulta=()=> {
  return (
    <div>
        <Consultabody>
            <Divimg>
                <Img src="src\img\imagen3.png" alt="" />
            </Divimg>
            <Form action="">
                <H1>Consulta</H1>
                <Divcaja className='Inputconsulta'>
                    <Inputcaja type="text" required />
                    <Label className='Labelconsulta' >Nombre</Label>
                </Divcaja>
                <Divcaja className='Inputconsulta'>
                    <Textconsulta name="" id="" cols="30" rows="10" required></Textconsulta>
                    <Label className='Labelconsulta'>Mensaje/Consulta</Label>
                </Divcaja>
                <a href="" className='Abotoninicio'>Enviar</a>
            </Form>
        </Consultabody>


    </div>

  )
  
}

export default Consulta