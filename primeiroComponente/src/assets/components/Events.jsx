import React from "react"

const Events = () => {
    const handleClick = () => {
        console.log("Executou")
    }

    // Função de Redenrização
    const renderSomething = (x) => {
        if (x){
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Renderizando outra coisa</h1>
        }
    }


  return (
    <div>
        <div>
            <button onClick={()=>console.log('Testante um evento')}>Clique Aqui</button>
        </div>

        {/* Evento com Função */}
        <div>
            <button onClick={handleClick}>Clique Aqui - Com Função</button>
        </div>

        {/* Função com Render */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events