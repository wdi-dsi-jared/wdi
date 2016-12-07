import React, { Component } from 'react';
import DummyGraph from '../DummyGraph/DummyGraph.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      placeholder: '',
    }
  }

  getDummyData() {
    console.log('getDummyData invoked!')
    // fetch('/dummyRouteGoesHere', {
    //   method: 'GET',
    //   headers : {
    //     'content-type': 'application/json'
    //   }
    // })
    // .then(r => r.json())
    // .then((data) => {
    //   console.log('here is their data!', data)
    //   this.setState({
    //     placeholder: data
    //   }, () => {
    //     console.log(this.state)
    //   })
    // })
    console.log('getDummyData complete!')
  }

  render() {
    return(
      <div>
        <h1>hi!</h1>
        <DummyGraph
          getDummyData={this.getDummyData.bind(this)}
        />
      </div>
    )
  }
}
