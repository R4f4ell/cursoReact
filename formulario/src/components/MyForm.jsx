import { useState } from 'react'
import './myForm.css'

const MyForm = ({userName, userEmail}) => { {/* Input controlado */}
    // Gerenciamento de dados
    const [name,setName] = useState(userName)
    const [email,setEmail] = useState(userEmail)

    const [bio,setBio] = useState("")

    const [role, setRole] = useState("")

    const handleName = (e) => {
        // Nesse caso aqui, eu estou alterando o valor do input quando eu apenas estou digitando nele (pode ver isso digitando no input name e olhando no console)
        setName(e.target.value)
    }

    // Envio de formulário
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, bio, role)

        // Validação
        // Envio

        // Limpar form
        setName("")
        setEmail("")
        setBio("")
        setRole("")
        // Ao digitar e enviar, os inputs serão limpados automaticamente.
    }

    console.log(name, email)



  return ( <div>
        {/* Criação de form */}
        <form onSubmit={handleSubmit}> {/* Envio de formulário */}
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} value={name || ""} /* Controlled input "value={name}"*/ />
            </div>
            {/* Label envolvendo o Input, outra maneira de aplicar o input, mas sai um pouco do que eu já tenho prática */}
            <label>
                <span>Email:</span>
                <input type="text" name='email' placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)} value={email || ""} /* Controlled input "value={email}"*//>
            
                {/* Simplificando manipulação no onChange. Posso fazer tanto dessa forma, quanto a de cima no handleName */}
            </label>
            {/* Input de textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do Usuário:' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* Select */}
            <label>
                <span>Função no Sistema:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm