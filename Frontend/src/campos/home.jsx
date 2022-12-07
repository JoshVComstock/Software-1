import React from "react"
import { useState,useEffect  } from "react";
import styled from "styled-components";
import Emuladorjs from "../campos/emuladorjs.jsx";

const Home = () => {
  const [revisado, setRevisado] = useState();
  const [tarea, setTarea] = useState([]);

  async function mostrartarea() {
    const response = await fetch("http://127.0.0.1:8000/api/tarea", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setTarea(respuesta);
  }
  
  useEffect(() => {
    mostrartarea();
  }, []);

  return (
    <Container>
      <Nav>
        <Bav>
          <Tabstoggle onClick={() => setRevisado(false)}>
            Tareas enviadas
          </Tabstoggle>
          <Tabstoggle onClick={() => setRevisado(true)}>Revisados</Tabstoggle>
        </Bav>
      </Nav>
      <Plataforma>
        {revisado ? (
          <>
            <Card1>
              {tarea.map((v, i) => (
                <Divcard key={i}>
                  <Divtitulocard>
                    <Imglogo src="./src/img/estudiar.png" alt="" />
                    <h3>{v.nombre}</h3>
                  </Divtitulocard>
                  <Divlinks>
                    <P>{v.descripcion}</P>
                  </Divlinks>
                  <Divbotonrevisado>
                    <Botonrevisado>Revisado</Botonrevisado>
                  </Divbotonrevisado>
                </Divcard>
              ))}
            </Card1>
          </>
        ) : (
          <>
            <Divcampos1>
              <Divh1>
                <H1>Tareas enviadas</H1>
              </Divh1>
              <Cardall>
                <Card>
                {tarea.map((v, i) => (
                <Divcard key={i}>
                  <Divtitulocard>
                    <Imglogo src="./src/img/estudiar.png" alt="" />
                    <h3>{v.nombre}</h3>
                  </Divtitulocard>
                  <Divlinks>
                    <P>{v.descripcion}</P>
                  </Divlinks>
                  <Divbotonrevisado>
                    <Botonrevisado>Revisado</Botonrevisado>
                  </Divbotonrevisado>
                </Divcard>
              ))}
                </Card>
              </Cardall>
            </Divcampos1>
            <Divcampos>
              <Divh1>
                <H1>Provar codigo</H1>
              </Divh1>
              <div>
                <Emuladorjs />
              </div>
            </Divcampos>
          </>
        )}
      </Plataforma>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f2fff4;
`;
const Bav = styled.div`
  display: flex;
  margin-left: 46px;
`;
const Nav = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: left;
  background: #f2fff4;
  height: 50px;
`;
const Tabstoggle = styled.button`
  margin-left: 0px;
  background: #03045e;
  color: #fff;
  border: none;
  padding: 10px;
  transition: 0.5s;
  border-left: 1px solid #605ee3;
  &:hover {
    background: #605ee3;
  }
`;
const Plataforma = styled.div`
  padding: 40px;
  width: 100%;
  height: 100vh;
  background: #fff;
  border-radius: 50px;
  border: none;
  border-top: 2px solid #605ee3;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
`;
const Divcampos = styled.div`
  margin: 2px;
  width: 50%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;
const Divcampos1 = styled.div`
  margin: 2px;
  width: 50%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
const Divh1 = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
`;
const H1 = styled.h1`
  font-size: 40px;
  margin-left: 20px;
  color: #03045e;
  padding-top: 20px;
`;
const Divcard = styled.div`
  width: 500px;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  margin: 20px 20px;
  background: #605ee3;
`;
const Imglogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;
const Divtitulocard = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5px;
`;
const Divlinks = styled.div`
  width: 100%;
  height: 145px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  overflow: hidden;
  overflow-y: auto;
`;
const Botonrevisado = styled.button`
  padding: 4px;
  margin-top: 1px;
  margin-right: 15px;
  background: #605ee3;
  border-radius: 5px;
  border: none;
  color: #0f1048;
  cursor: pointer;
  &:hover {
    background: #7f7de3;
  }
`;
const Divbotonrevisado = styled.div`
  display: flex;
  justify-content: right;
  
`;
const P = styled.p`
  text-align: justify;
`;
const Card = styled.div`
  width: 300px;
  display: flex;
  flex-wrap:wrap;
 
  
  
`;
const Card1 = styled.div`
  width: 100vh;
  display: flex;
  flex-wrap:wrap;
  align-items:right;
  text-align:right;
  justify-content:right;
`;
const Cardall = styled.div`
  display: flex;
  width:100%;
  text-align:center;
  align-items:center;
  justify-content:center;
`;
