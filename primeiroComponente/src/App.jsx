import './App.css'

// Importando componente FirstComponent
import FirstComponent from './assets/components/FirstComponent'

// Importando componente TemplateExpression
import TemplateExpression from './assets/components/TemplateExpression'

// Importando componente Events
import Events from './assets/components/Events'

function App() {
  // Comentário
  return (
      <div id='root'>
        {/* Comentário JSX */}
        <h1>Fundamentos do React</h1>
        <FirstComponent/>
        <TemplateExpression/>
        <Events/>
      </div>
  )
}

export default App
