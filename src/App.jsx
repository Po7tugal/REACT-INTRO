import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Mensagem from './Mensagem';
import Alerta from './Alerta';
import Contador from './Contador';
import Formulario from './Formulario';
import Tarefas from './Tarefas';

function App() {

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Olá React!</h1>
      <p className="lead text-center">
        Este é o teu primeiro componente React.
      </p>
      {/* Evento onClick em React usa camelCase e chama uma função */}
      <button
        className="btn btn-success d-block mx-auto"
        onClick={() => alert('Olá, Filipe!')}
      >
        Clica-me!
      </button>

      <h1 className="text-center">Contador</h1>

      <Contador />

      <h1 className="text-center">Componentes e Props</h1>
      {/* Cada componente recebe props diferentes */}
      <Mensagem mytext="Bem-vindo à tua primeira aplicação React!" />
      <Mensagem mytext="Os componentes permitem reutilizar código!" />

      <h1 className="text-center">Alertas</h1>

      <Alerta tipo= "success" texto="Esse é um alerta de sucesso!"/>
      <Alerta tipo= "warning" texto="Esse é um alerta de sucesso!"/>
      <Alerta tipo= "danger" texto="Esse é um alerta de sucesso!"/>
      
      <h1 className="text-center">Formulario</h1>

      <Formulario />

      <h1 className="text-center">Tarefas</h1>

      <Tarefas />

    </div>
  );
}

export default App
