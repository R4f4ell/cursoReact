import { useState } from 'react'
import './App.css'

// CSS de componente
import MyComponent from './components/MyComponent'

// CSS Modules
import Title from './components/Title'

function App() {
  // CSS inline dinâmico 
  const n = 15
  
  // Classe dinâmica
  const redTitle = true

  return (
    <div>
      {/* CSS Global */}
      <h1>CSS no React</h1>  
      <MyComponent />  
      <p>Pegou o CSS do componente</p>
      {/* Inline style */}
      <p style={{color: "blue", padding: '40px'}}>Este elemento tem estilos inline</p>
      {/* Inline style dinâmico*/}
      <h2 style={n > 10 ? {color: 'purple'} : {color:'orange'}} >CSS Dinâmico</h2>
      <h2 style={n < 10 ? {color: 'purple'} : {color:'orange'}} >CSS Dinâmico</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "redTitle" : "title"}>Título com Classe</h2>
      {/* CSS Modules */}
      <Title />
    </div>
  )
}

export default App
