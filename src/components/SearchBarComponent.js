import React, { Component } from 'react';

export default class SearchBarComponent extends Component {

  render() {
    const handleOnChange = this.props.handleOnChange
    return (
    <div className="ui input fluid"> 
        <input autoComplete="off" onChange={e => handleOnChange(e)} placeholder="Search Term" type="text" name="searchTerm"/>
    </div>
    );
  }
}
