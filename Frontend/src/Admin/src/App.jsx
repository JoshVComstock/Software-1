import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Portada from './admin/portada'
import Nav from './nav'
import Campo from './admin/campo'
import Informativo from './admin/Informativo'
import styled from 'styled-components'
import Contacto from './admin/contacto'

//import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Consultas from './admin/contacto'



function App() {
  return(
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Nav/>}> 
       <Route path='' element={<Portada/>} />
       <Route path='contacto' element={<Contacto/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    

  );
}

export default App
