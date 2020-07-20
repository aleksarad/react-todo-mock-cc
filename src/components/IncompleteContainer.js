import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {
    
    state = {
        search: ''
    }

    // When implementing the search bar, consider implementing a function that handles setState and pass this function down to 
    // SearchBarComponent
  
    handleOnChange = (e) => {
      this.setState({
        search: e.target.value
      })
    }

    //consider removing case sensitivity
    handleFilter = () => {
      const search = this.state.search 
      const todos = this.props.todos 
      const filteredTodos = todos.filter(todo => todo.title.includes(search))
      return filteredTodos
    }

    // When implementing the search term, consider implementing a function that FILTERs the todos.
    // To determine which to filter, find out which ToDo title INCLUDES the search term typed.

  render() {
    const updateCompletion = this.props.updateCompletion
    return (
        <div>
            <h1>Incomplete Todos</h1>
            <SearchBarComponent handleOnChange={this.handleOnChange}/>
            {this.handleFilter().map(todo => <ToDoCard updateCompletion={updateCompletion} key={todo.id} todo={todo} delete={this.props.delete} />)}
        </div>
    )
  }
}
