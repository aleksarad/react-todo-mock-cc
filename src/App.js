import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'
import { findRenderedComponentWithType } from 'react-dom/test-utils';


class App extends React.Component{

  state = {
    todos: [],
  }

  componentDidMount() {
    this.getTodos()
  }

  getTodos = () => {
    fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(todos => this.setState({todos: todos}))
  }

  updateCompletion = (id) => {
    let todos = [...this.state.todos]
    const findTodo = todos.find(todo => todo.id === id)
    const i = todos.indexOf(findTodo)
    todos[i].completed = !todos[i].completed

    this.setState({
      todos: todos
    })
  }

  newTodo = (newTask) => {
    const config = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(newTask)
    }
    fetch('http://localhost:3000/todos', config)
    .then(res => res.json())
    .then(newTodo => this.renderNewTodo(newTodo))
  }

  renderNewTodo = (newTodo) => {
    this.setState({
      todos: [newTodo, ...this.state.todos]
    })
  }

  handleDelete = (id) => {
    const newArr = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: newArr
    })
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <ToDoContainer delete={this.handleDelete} new={this.newTodo} updateCompletion={this.updateCompletion} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
