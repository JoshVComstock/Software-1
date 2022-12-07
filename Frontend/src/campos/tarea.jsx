import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const Tarea = () => {
   const [nombre,setNombre]=useState("");
   const [descripcion,setDescripcion]=useState("");

  const enviar=async (e)=> {
    e.preventDefault();
    //para pedir al backend
    const response=await fetch('http://127.0.0.1:8000/api/tarea',{
      method:'POST',
      headers:{
        "accept":"application/json",
        "content-type":"application/json"
      },
      body: JSON.stringify({
        nombre:nombre,
        descripcion:descripcion,
      })
    })
    
  const respuesta=await response?.json();
  MessageEvent(respuesta);
   if(respuesta.mensaje="Creado satisfactoriamente")
   {
    setNombre(" ");
    setDescripcion(" ");
   }
  }
  return (
    <Container>
        <Form>
            <H1>Enviar tarea</H1>
        </Form>
        <Form>
            <Divcampo>
                <Label>Nombre</Label>
                <Input type="text" value={nombre} onChange={e=>setNombre(e.target.value)}/>
            </Divcampo>
            <Divcampo>
                <Label >Codigo</Label>
                <Textarea value={descripcion} onChange={e=>setDescripcion(e.target.value)}></Textarea>
            </Divcampo>
            <Enviar onClick={enviar}>Enviar</Enviar>
        </Form>


    </Container>
  )
}

export default Tarea
const Container=styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;
const H1=styled.h1`
    font-size: 50px;
    margin: 5px;
`;
const Input=styled.input`
    width: 300px;
    font-size: 20px;
    height: 30px;
    outline: none;
    
`;
const Textarea=styled.textarea`
    width: 300px;
    font-size: 20px;
    height: 30px;
    outline: none;
    height: 70px;
    
`;
const Label=styled.label`
    margin: 5px;
`;
const Divcampo=styled.div`
    display: flex;
    flex-direction: column;
`;
const Enviar=styled.button`
    margin: 5px;
    padding: 7px;
    
`;
const Form=styled.div`
margin-left: 20px;
`;