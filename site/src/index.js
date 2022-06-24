import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './pages/home'
import Cadastrar from './pages/cadastrar'
import Consultar from './pages/consulta'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
        <Route path='/home'  element={<Home/>}/>
        <Route path='/cadastrar' element={ <Cadastrar/>} />
        <Route path='/consultar' element={ <Consultar/>}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
