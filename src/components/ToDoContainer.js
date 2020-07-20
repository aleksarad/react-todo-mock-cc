import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {

  filterCompletion = (trueOrFalse) => {
    const todos = this.props.todos 

    if (trueOrFalse === true) {
      let filtered = todos.filter(todo => todo.completed ===  true)
      return filtered
    }
    else {
      let filtered = todos.filter(todo => todo.completed === false)
      return filtered
    }
  }

  render() {
    const updateCompletion = this.props.updateCompletion
    return (
      <div id="todo-container">
        <NewToDoForm new={this.props.new}/>
        <CompletedContainer updateCompletion={updateCompletion}
         todos={this.filterCompletion(true)}
         delete={this.props.delete}/>
        <IncompleteContainer updateCompletion={updateCompletion}
         todos={this.filterCompletion(false)}
         delete={this.props.delete}/>
      </div>
    );
  }
}
