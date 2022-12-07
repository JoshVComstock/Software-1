import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModalContextProvider } from "./context/modalContext";
import Nav from "./nav";
import Inicio from "./campos/inicio";
import Aprender from "./campos/aprender";
import Opiniones from "./campos/opiniones";
import Contactos from "./campos/contactos";
import Modal from "./modal";
import Login from "./campos/login";
import { Navcontextprovider } from "./context/navcontext";
import Home from "./campos/home";
import {Usercontextprovider}  from "./context/userContext";
import Emuladorjs from "./campos/emuladorjs";
import Editor from "./editor";

function App() {
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <Usercontextprovider>
        <Navcontextprovider>
          <Nav />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="editor" element={<Editor />} />
            <Route path="login" element={<Login />} />
            <Route path="registro"/>
            <Route path="contactos" element={<Contactos />} />
            <Route path="home" element={<Home/>}/>
            <Route path="emulador" element={<Emuladorjs/>}/>
          </Routes>
          <Modal />
        </Navcontextprovider>
        </Usercontextprovider>
      </ModalContextProvider>
    </BrowserRouter>
  );
}

export default App;
