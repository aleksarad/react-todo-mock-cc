import React from 'react'

const ToDoCard = (props) => {
    const todo = props.todo
    return (
    <div className="ui card">
        <div className="content">
          <div className="header">{todo.title}</div>
          {todo.completed
          ?  <button onClick={() => props.updateCompletion(todo.id)} className="ui button orange">Incomplete</button>
          :  <button onClick={() => props.updateCompletion(todo.id)} className="ui button blue">Complete</button>
          }
          <button onClick={() => props.delete(todo.id)} className="ui button red">Delete</button>
        </div>
        
    </div>
    )
}

export default ToDoCard