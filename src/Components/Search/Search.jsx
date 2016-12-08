import React, { Component } from 'react';

export default class Search extends Component {

  render() {
    return(
      <div>
        <h1> Hello! Search for a subway station and a date to predict the relative crowdedness of that station on that day! </h1>
        <input type="text" name="input" />
        <button onClick={this.props.getDummyData}>click to get data</button>
      </div>
    )
  }
}
