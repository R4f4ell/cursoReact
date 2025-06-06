import { useFetch } from "../hooks/useFetch"

import { useParams, Link } from "react-router-dom"

const Products = () => {
    const {id} = useParams()
    const url = "http://localhost:3000/products/" + id
    const {data:products} = useFetch(url)

    if(!products) return <p>Carregando...</p>

  return (
    <div>
        <p>ID do produto: {id}</p>
        <div>
            <h1>{products.name}</h1>
            <p>R$ {products.price}</p>
            {/* nested route */}
            <Link to={`/products/${products.id}/info`}>Mais informações</Link>
        </div>
    </div>
  )
}

export default Products