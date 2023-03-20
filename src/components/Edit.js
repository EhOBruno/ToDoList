import { useState } from "react"
import {AiOutlineCloseCircle} from "react-icons/ai"
import {BiEdit} from "react-icons/bi"

function Edit(props) {
    const [editar, setEditar] = useState({
        id: null,
        value: ''
    })

    const atualizarTarefa = (id, textoEditado) => {
        props.onEditar(id, textoEditado)
        setEditar({id: null, value: ''})
    }

    const excluirTarefa = (id) => {
        props.onExcluir(id)
        setEditar({id: null, value: ''})
    }

    const change = (e) => {
        setEditar({...editar, value: e.target.value})
    }

    const editSubmit = (e) => {
        e.preventDefault()
        atualizarTarefa(editar.id, editar.value)
    }

    if (editar.id) {
        return (
            <form onSubmit={editSubmit}>
                <input value={editar.value} onChange={change} />
                <button type='submit'>Atualizar</button>
            </form>
        )
    }

    return (
        <ul>
            {props.tarefas.map((tarefa, index) => (
                <li className="tarefa" key={index}>
                    <div key={tarefa.id} onClick={() => atualizarTarefa(tarefa.id, tarefa.text)}>{tarefa.text}</div>
                    <label>
                        <input
                        type="checkbox"
                        />
                    </label>
                    <div>
                        <AiOutlineCloseCircle onClick={() => excluirTarefa(tarefa.id)} />
                        <BiEdit onClick={() => setEditar({ id: tarefa.id, value: tarefa.text })}/>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Edit