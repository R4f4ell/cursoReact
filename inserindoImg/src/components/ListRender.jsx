import React from 'react'

import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Mateus", "Pedro", "Josias"])

    const [users, setUsers] = useState([
        {id: 1, name: "Mateus", age: 31},
        {id: 2, name: "Pedro", age: 20},
        {id: 3, name: "Josias", age: 19}
    ])

    const deleteRandom = () => {
        // Aqui eu estou removendo o último nome da lista a cada click no botão
        
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }

  return (
    <div>
        {/* Render sem KEY */}
        <ul>
            {list.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
        {/* Render com KEY */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        {/* previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender