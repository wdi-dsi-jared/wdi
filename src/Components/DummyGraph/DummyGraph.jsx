import React, { Component } from 'react';

export default class DummyGraph extends Component {

  render() {
    return(
      <div>
        <h3>dummy graph goes here</h3>
        <button onClick={this.props.getDummyData}>click to get data</button>
      </div>
    )
  }
}
