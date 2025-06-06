import './App.css'

import { Outlet } from 'react-router-dom'

// Link entre páginas
import Navbar from './components/Navbar'

// Search params
import SeachForm from './components/SeachForm'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <SeachForm />
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
