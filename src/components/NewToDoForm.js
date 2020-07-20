import React, { Component } from 'react';

export default class NewToDoForm extends Component {
  state = {
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      title: this.state.title,
      completed: false
    }
    this.props.new(newTask)
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)} className="ui form">
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input onChange={e => this.handleChange(e)} type="text" name="title" placeholder="Title"/>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
