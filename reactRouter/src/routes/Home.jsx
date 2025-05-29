
// Carregamento de dados
import {useFetch} from "../hooks/useFetch"

const url = "http://localhost:3000/products"

const Home = () => {
    const {data: items} = useFetch(url)

  return (
    <div>
        <h1>HOME</h1>
        {/* Carregamento de dados */}
        <ul className="products">
            {items && items((item) => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Home