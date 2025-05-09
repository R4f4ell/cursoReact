// Criando componente
const TemplateExpression = () => {
    const name = 'Rafael'

    const data = {
        age: 31,
        job: 'Programador'
    }

    return (
        <div>
            <h3>A soma é {2 + 2}</h3>
            <h5>Bem vindo {name}</h5>
            <p>
                Você tem {data.age} anos e é um {data.job}
            </p>
        </div>
    )
}

export default TemplateExpression;