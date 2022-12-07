import React from "react";
import styled from "styled-components";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useNavContext } from "./context/navcontext";
import { useuserContext } from "./context/userContext";


const Nav = () => {
  const { logged } = useNavContext();
  const navegation=useNavigate();
  const {setUser}=useuserContext();
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const Cerrasesion = async () => {
    const token = getCookie("token"); //esto agarra el token
    const response = await fetch("http://127.0.0.1:8000/api/logout", {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    if(response.ok)
    {
        document.cookie = `token=; max-age=0`;
        setUser({ isLogged: false });
        navegation('/');
    }
  };
  return (
    <Divbody>
      <Header>
        <Logonav>
          <img src="./src/img/Logo.png" alt="" />
          <Alogo>
            Pumas
            <Spanlogo>Mizque</Spanlogo>
          </Alogo>
        </Logonav>
        <Nave>
          {logged ? (
            <>
              <Abotones to="/home">
                Home
              </Abotones>
              <Abotones  to="/contactos">
                  Contactos
              </Abotones>
              
              <Abotones1 onClick={Cerrasesion}>cerrar sesion</Abotones1>
            </>
          ) : (
            
            <>
              <div>
                <Abotones  to="/">
                  Inicio
                </Abotones>
                <Abotones  to="/editor">
                  editor
                </Abotones>
                <Abotones  to="/contactos">
                  Contactos
                </Abotones>
                <Abotones  to="/emulador">
                  Emulador js
                </Abotones>

              </div>
                  <Abotones1 to="/login">Login</Abotones1>
                  <Abotones2 to="/registro">Registro</Abotones2>
            </>
          )}
        </Nave>
      </Header>
      <Outlet />
    </Divbody>
  );
};
export default Nav;
const Divbody = styled.div`
`;
const Nave=styled.nav`
  display: flex;
  align-items: center;
`;

const Abotones1 = styled(Link)`
  font-size: 20px;
padding: 5px;
margin: 10px;
border: none;
text-decoration: none;
background: transparent;
cursor: pointer;
color: #03045e;
margin-left: 60px;
&:hover{
  border-bottom: 1px groove #03045e;
  
}
`;
const Abotones2 = styled(Link)`
  font-size: 20px;
  text-decoration: none;
padding: 5px;
margin: 10px;
border: none;
background: transparent;
cursor: pointer;
color: #03045e;
&:hover{
  border-bottom: 1px groove #03045e;
}
`;
const Header = styled.header`
  position: fixed-relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: white;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  padding: 2rem 9%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
`;
const Logonav=styled.div`
  display: flex;
 
`;
const Spanlogo = styled.span`
  color: #605ee3;
`;
const Abotones = styled(Link)`
  font-size: 20px;
  margin-left: 2rem;
  color: #03045e;
  text-decoration: none;
  &:hover{
   color: #605ee3;
  }
`;
const Alogo=styled.a`
font-size: 2rem;
    color: #03045e;
    `;