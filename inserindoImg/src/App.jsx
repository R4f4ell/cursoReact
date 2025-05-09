import './App.css'

// Imagem em Assets
import react from './assets/react.svg'

// Importando um hook (useState)
import Data from './components/Data'

// Renderização de Lista
import ListRender from './components/ListRender'

// Renderização condicional
import ConditionalRender from './components/ConditionalRender'

// Props
import Props from './components/Props'

// Props Desestruturado
import PropsDesestruturacao from './components/PropsDesestruturacao'

// Renderização de listas com componente
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id: 2, brand: "KIA", color: "Branco", km: 100},
  {id: 3, brand: "Renault", color: "Azul", km: 10000},
]

// Fragments
import Fragments from './components/Fragments'

// Children
import Container from './components/Container'

// Função em prop
import ExecuteFuntion from './components/ExecuteFuntion'

// State lift
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'


function App() {

  // Função em prop
  function showMessage(){
    console.log('Função em Prop')
  }

  // State lift 
  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
      <div id="root">
       <h1>Avançando em React</h1>
       {/* Imagem em public */}
       <img src="/vite.svg" alt="Imagem da logo de Vite" />
       {/* Imagem em assets */}
       <img src={react} alt="Imagem da logo de React" />
       {/* useState */}
       <Data />
       {/* Renderização de Lista */}
       <ListRender />
       {/* Renderização condicional */}
       <ConditionalRender />
       {/* Props */}
       <Props name="Rafael" />
       {/* Props Desestruturado */}
       <PropsDesestruturacao brand="VW" km={999} color="Vermelho"/>
       {/* Reaproveitamento de componentes */}
       <PropsDesestruturacao brand="Fiat" km={888} color="Azul"/>
       <PropsDesestruturacao brand="Audi" km={777} color="Verde"/>
       {/* Renderização de listas com componente */}
       {cars.map((car) => (
        <PropsDesestruturacao key={car.id} brand={car.brand} color={car.color} km={car.km} />
       ))}
       {/* Fragments */}
       <Fragments />
       {/* Children */}
       <Container>
        <p>Alguma Coisa</p>
       </Container>
       {/* Função em prop */}
       <ExecuteFuntion myFunction={showMessage} />
       {/* State lift */}
       <Message msg={message} />
       <ChangeMessage handleMessage={handleMessage} />
      </div>
  )
}

export default App
