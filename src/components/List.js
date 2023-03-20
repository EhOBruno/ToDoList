import { useState } from "react";
import Form from "./Form";
import Edit from "./Edit";

function List() {
    const [tarefas, setTarefas] = useState([])

    const addTarefa = (tarefa) => {
        setTarefas([tarefa, ...tarefas])
    }

    const editarTarefa = (id, textoEditado) => {
        setTarefas(
            tarefas.map((tarefa) => {
                if (tarefa.id === id) {
                    return {...tarefa, text: textoEditado}
                } else {
                    return tarefa
                }
            })
        )
        console.log(`Tarefa ${id} atualizada!`)
    }

    const excluirTarefa = (id) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
        console.log(`Tarefa ${id} excluída!`)
    }

    return (
        <>
        <div className="form">
        <Form onSubmit={addTarefa}/>
        </div>
        
        <Edit tarefas={tarefas} onEditar={editarTarefa} onExcluir={excluirTarefa} />
        </>
    )
}

export default List