import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div>
      <h1>Form em React</h1>    
      <MyForm userName='Rafael' userEmail='rafael@gmail.com'/> {/* Input controlado */}
    </div>
  )
}

export default App
