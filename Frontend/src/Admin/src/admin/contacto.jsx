import React from "react"
import { useState,useEffect  } from "react";
import styled from "styled-components";
import './all.css'

const Divall = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Respuesta=styled.div`
 
`;
const Inputrespuesta=styled.input`
width: 90%;
height: 25px;
border-radius: 5px;
`;

const Divbody=styled.div`
 width: 100vh;
 height: 25vh;
 display: flex;
`;
const Divconten=styled.div`
 border: 1px solid black;
 display: flex;
 flex-direction: column;
 gap: 10px;
 padding: 10px;
 border-radius: 20px;
`;
const H1titulo=styled.h1`
 text-align: center;
`;
const Imgmensaje=styled.img`
 width: 30px;
 height: 30px;
`;


const Contacto=()=>
{ 
  const [nombre,setNombre]=useState("");
  const [email,setEmail]=useState("");
  const [consulta,setConsulta]=useState("");
  const [descripcion,setDescripcion]=useState("");
  const [contactos,setContactos]=useState([]);
  
  async function llenarcontactos()
  {
    const response=await fetch('http://127.0.0.1:8000/api/contacto',{
      method:'GET',
      headers:{
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta=await response?.json();
    setContactos(respuesta);
  }



  useEffect(()=>{
    llenarcontactos();;
  }, [])


    return(
      <div className="body">
        <div>
          <H1titulo>Consultas</H1titulo>
        </div>
        {
        contactos.map((v,i)=>(
          <div key={i}>
            <Divbody>
              <Divconten>
                <p>
                  {v.nombre} - {v.email}
                </p>
                <p>
                  {v.consulta}
                </p>
                <p>
                  Sede: {v.descripcion}
                </p>
              <Respuesta>
                  <Inputrespuesta   type="text" placeholder="Respuesta" />
                    <Imgmensaje src="img/enviar-mensaje.png" alt="" />
                
              </Respuesta>
          
              </Divconten>      
            </Divbody>    
          </div>
        ))
        }                                                       
       </div>
    );
}
export default Contacto;