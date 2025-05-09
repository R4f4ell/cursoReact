import React from 'react'

const ConditionalRender = () => {
    const x = true

    const name = "Rafael"

  return (
    <div>
        {/* Render condicional só com IF*/}
        <h3>Isso será exibido?</h3>
        {x && <p>Se X for True sim!</p>}

        <h3>Render Ternário</h3>
        {/* Render condicional com IF e ELSE*/}
        {name === "Mateus" ? (
            <div><p>OLá Mateus</p></div>
        ) : (
            <div><p>Nome não encontrado</p></div>
        )}

    </div>
    
  )
}


export default ConditionalRender