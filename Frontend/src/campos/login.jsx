import React from "react";
import styled from "styled-components";
import { useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useNavContext } from "../context/navcontext";

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navegate=useNavigate();
  const {setLogged}=useNavContext();

  const enviar=async (e)=> {
    e.preventDefault();   
    const response=await fetch('http://127.0.0.1:8000/api/login',{
      method:'POST',
      headers:{
        "accept":"application/json",
        "content-type":"application/json"
      },
      body: JSON.stringify({
        email:email,
        password:password,
      })
    })
    if(response.ok)
    {
    const responsejson= await response?.json();
    document.cookie = `token=${responsejson.access_token}; max-age=${
      60 * 60
    }; path=/; samesite=stric`;
    setLogged(true);
    navegate('/home')
    }
    
  }
  

  return (
    <Container>
      <Formulario>
        <Titulo>Login</Titulo>
        <Cajainput>
          <Nombres  >Email</Nombres>
          <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Cajainput>
        <Cajainput>
          <Nombres>Password</Nombres>
          <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Cajainput>
        <Nombres>
          Crear una <Linka href="#">cuenta</Linka>
        </Nombres>
        <Boton onClick={enviar} >Enviar</Boton>
      </Formulario>
    </Container>
  );
};
export default Login;

const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to right, #03045e, #caf0f8);
`;
const Formulario = styled.div`
  
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: white;
  text-align: center;
  padding: 20px 35px;
  box-shadow: 0 5px 10px rgba(71, 3, 6, 0.7);
`;
const Titulo = styled.h1`
  color: #252525;
  font-size: 35px;
  font-weight: 800;
  margin-bottom: 30px;
`;
const Cajainput = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 35px;
`;
const Nombres = styled.p`
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 7px;
`;
const Linka = styled.a`
  cursor: pointer;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  padding: 0 5px;
  font-size: 18px;
`;
const Boton = styled.button`
  color: #fff;
  border: none;
  background: linear-gradient(to right, #03045e, #caf0f8);
  padding: 10px 15px;
  cursor: pointer;
  font-size: 15px;
  border-radius: 8px;
`;
