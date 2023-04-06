import React from 'react'
import { Route, Link, Routes} from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import {Sobre} from './pages/Sobre'
import {Contato} from './pages/Contato'


export default function App() {
  const name = 'Maris'
  

  return (
    <main>
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to={`/Sobre/${name}`}>Sobre</Link></li>
        <li><Link to="/Contato">Contato</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" exact Component={Inicio}/>
      <Route path="/Sobre/:name" Component={Sobre}/>
      <Route path="/Contato" Component={Contato}/>
    </Routes>
    </main>
  )
}
