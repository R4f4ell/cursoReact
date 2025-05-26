import { useState, useEffect } from 'react'

import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"

import './App.css'

function App() {
  // Resgatando dados
  const [products, setProducts] = useState([])

  // custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url) 

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url)
  //     const data = await res.json()

  //     setProducts(data)
  //   }

  //   getData()
  // }, [])

  // Envio de dados
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const product = {
      name,
      price
    }

    // Refatorando POST
    httpConfig(product, "POST")

    // const res = fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    // // Carregamento dinâmico
    // const addedProduct = res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])
  }

  return (
    <div className="app">
      <h1>HTTP em React</h1>
      {/* Loading */}
      {loading && <p>Carregando...</p>}
      {/* Tratando erros */}
      {error && <p>{error}</p>}
      {/* Resgate de dados */}
      <ul>
        {items && 
        items.map((product) => {
          <li key={product.id}>{product.name} - R${product.price}</li>
        })}
      </ul>
      {/* Envio de dados */}
      <div className="add-produc">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          
          <label>
            <span>Preço:</span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* <input type="submit" value='Enviar' /> */}
          {/* Loading post */}
          {loading && <input type='submit' disabled value="Aguarde"></input>}
          {!loading && <input type='submit' value="Criar"></input>}
        </form>
      </div>
    </div>
  )
}

export default App
