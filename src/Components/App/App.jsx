import React, { Component } from 'react';
import DummyGraph from '../DummyGraph/DummyGraph.jsx';
import { BarChart } from 'react-d3';

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

    const barData = [
      {
        "name": "Series A",
        "values": [
          { "x": 1, "y":  91},
        ]
      },
      {
        "name": "Series B",
        "values": [
          { "x": 1, "y":  91},
        ]
      }
    ];

    return(
      <div>
        <h1>hi!</h1>
        <DummyGraph
          getDummyData={this.getDummyData.bind(this)}
        />
        <BarChart
          data={barData}
          width={500}
          height={200}
          fill={'#3182bd'}
          title='Bar Chart'
          yAxisLabel='time'
          xAxisLabel='people'
        />
      </div>
    )
  }
}
