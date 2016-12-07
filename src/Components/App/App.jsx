import React, { Component } from 'react';
import Graph from '../Graph/Graph.jsx';
import { BarChart } from 'react-d3';
import Search from '../Search/Search.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: '',
    }
    this.barData = [
      //this will be replaced by the data we pull from our fetch (see above)
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
  }

  getDummyData() {
    console.log('getDummyData invoked!')
    this.setState({
      data: this.barData
    })
    console.log('getDummyData complete!')
  }

  graph() {
    return this.state.data ? ( <div>
        <h1>hi!</h1>

        <Graph
          data={this.state.placeholder}
          getDummyData={this.getDummyData.bind(this)}
        />
        <BarChart
          data={this.barData}
          width={500}
          height={200}
          fill={'#3182bd'}
          title='Bar Chart'
          yAxisLabel='people'
          xAxisLabel='time'
        />
      </div> ) : <div/>;
  }

  render() {

    return(
      <div>
        <Search getDummyData={this.getDummyData.bind(this)}/>
        {this.graph()}
      </div>
    )
  }
}
