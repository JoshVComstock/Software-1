import React from "react";
import {useState,useEffect} from 'react';
import styled from "styled-components";
import './all.css'

const H1titulo=styled.h1`
 position: relative;
 padding-bottom: 10px;
 margin-bottom: 10px;
`;
const Divbody=styled.form`
   width: 100%;
   height: 100vh;
  
`;
const Divgrupo=styled.div`
padding: 25px 40px;
background-color: #fff;
`;
const Divbox=styled.div`
   max-width: 350px;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   justify-content: center;
   align-items: center;
   text-align: center;
   background-color: #fff;
   box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
`;
const Divcontainer=styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
padding: 20px 100px;
`;
const Input=styled.input`
   width: 100%;
   padding: 0.5rem 1rem;
   outline: none;
   border: 2px solid rgba(0,0,0,0);
   background-color:230,230,230,0.6;
   font-size: 1.1rem;
   margin-bottom: 22px;
   transition:.3s;
   border-bottom: 1px solid;

`;


const Portada=()=>
{ 
  const [titulo,setTitulo]=useState("");
  const [foto,setFoto]=useState("");
  const [descripcion,setDescripcion]=useState("");
  const [portadas,setPortadas]=useState([]);


  const enviar=async (e)=> {
    e.preventDefault();
    //para pedir al backend
    const response=await fetch('http://127.0.0.1:8000/api/portada',{
      method:'POST',
      headers:{
        "accept":"application/json",
        "content-type":"application/json"
      },
      body: JSON.stringify({
        titulo:titulo,
        foto:foto,
        descripcion:descripcion,
      })
    })
    



  const respuesta=await response?.json();
  console.log(respuesta);
   if(respuesta.mensaje="Creado satisfactoriamente")
   {
    llenarportadas();
    setTitulo("");
    setFoto("");
    setDescripcion("");
   }
  }
  async function llenarportadas()
  {
    const response=await fetch('http://127.0.0.1:8000/api/portada',{
      method:'GET',
      headers:{
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta=await response?.json();
    setPortadas(respuesta);
  }
  useEffect(()=>{
    llenarportadas();;
  }, [])
  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      return console.log('Error: ', error);
    };

  }
 const llenarimagen=(e)=>
 {
  getBase64(e.target.files[0],(resultado)=>{
  setFoto(resultado);
  });
 }
    return(
      <></>
      /*<Divbody>
       
        <Divcontainer className="container-portada">

           <Divbox>
           <Divgrupo>                                                                      
                <H1titulo className="titulo-portada">Portada</H1titulo>
                
                 <Input className="input" type="text" name="Titulo" value={titulo} onChange={e=>setTitulo(e.target.value)} placeholder="Titulo"  />
                 <label>Foto</label>
                 <input type="file"  name="Foto"  onChange={llenarimagen}/>
                 <img  src={foto} /> 
                 <textarea className="input" type="text"  name="Descripcion" value={descripcion} onChange={e=>setDescripcion(e.target.value)} placeholder="Descripcion"/>
               <button className="boton" onClick={enviar}>Guardar</button>
            </Divgrupo>
           </Divbox>
          
        </Divcontainer>

       </Divbody>*/
    
    );
}
export default Portada;