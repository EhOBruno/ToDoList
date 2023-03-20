import { useState } from "react"

function Form(props) {
    const [input, setInput] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        })

        console.log(`Tarefa ${input} adicionada!`)

        setInput('')
    }

    const formChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <div>
                <input
                type="text" 
                placeholder="Adicione uma tarefa" 
                onChange={formChange}
                value={input}
                />
                <button className="form" type="submit">Adicionar tarefa</button>
                </div>
            </form>
        </div>
    )
}

export default Form