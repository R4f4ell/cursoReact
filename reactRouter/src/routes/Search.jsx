// Carregamento de dados
import {useFetch} from "../hooks/useFetch"

import { Link, useSearchParams } from "react-router-dom"


const Search = () => {
    const [searchParams] = useSearchParams()
    
    const url = "http://localhost:3000/products?" + searchParams
    
    const {data: items} = useFetch(url)
  return (
    <div>
        <h1>Resultados da pesquisa</h1>
        <ul className="products">
            {items && items((item) => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    {/* Rota dinâmica */}
                    <link to={`/products/${item.id}`}>Detalhes</link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Search