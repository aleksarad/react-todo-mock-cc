import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {
    const updateCompletion = props.updateCompletion
    return (
        <div>
            <h1>Completed Todos</h1>
            {props.todos.map(todo => <ToDoCard updateCompletion={updateCompletion} key={todo.id} todo={todo} delete={props.delete}/>)}
        </div>
    )
}

export default CompletedContainer