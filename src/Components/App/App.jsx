import React, { Component } from 'react';
import { BarChart } from 'react-d3';
import Search from '../Search/Search.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          "name": "Predicted Congestion",
          "values": [
            { "x": 1, "y":  91},
            { "x": 2, "y":  101},
            { "x": 3, "y":  111},
            { "x": 4, "y":  121},
            { "x": 5, "y":  131},
            { "x": 6, "y":  141},
            { "x": 7, "y":  151},
            { "x": 8, "y":  161},
            { "x": 9, "y":  171},
            { "x": 10, "y":  181},
            { "x": 11, "y":  171},
            { "x": 12, "y":  161},
            { "x": 13, "y":  151},
            { "x": 14, "y":  161},
            { "x": 15, "y":  171},
            { "x": 16, "y":  181},
            { "x": 17, "y":  191},
            { "x": 18, "y":  201},
            { "x": 19, "y":  201},
            { "x": 20, "y":  211},
            { "x": 21, "y":  151},
            { "x": 22, "y":  131},
            { "x": 23, "y":  81},
          ]
        }
      ],
    }
  }

  getDummyData() {
    console.log('getDummyData invoked!')
    console.log('getDummyData complete!')
  }

  graph() {
    return this.state.data ? ( <div>
        <BarChart
          data={this.state.data}
          width={500}
          height={200}
          fill={'#3182bd'}
          yAxisLabel='people'
          xAxisLabel='time'
        />
      </div> ) : <div/>;
  }

  testPing() {
    console.log('running test ping')
    return fetch('http://ec2-54-89-253-54.compute-1.amazonaws.com/myapp/make_it_happen')
    .then(r => r.json())
    .then((data) => {
      console.log(data)
    })
  }

  render() {

    return(
      <div>
        <Search getDummyData={this.getDummyData.bind(this)}/>
        {this.graph()}
        <button onClick={this.testPing}>Test</button>
      </div>
    )
  }
}
