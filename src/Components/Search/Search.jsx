import React, { Component } from 'react';

export default class Search extends Component {

  render() {
    return(
      <div>
        <input type="text" name="input" />
        <button onClick={this.props.getDummyData}>click to get data</button>
      </div>
    )
  }
}
