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
    this.barData = {
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "10": 10,
      "11": 11,
      "12": 12,
      "13": 13,
      "14": 14,
      "15": 15,
      "16": 16,
      "17": 17,
      "18": 18,
      "19": 19,
      "20": 20,
      "21": 21,
      "22": 22,
      "23": 23,
      "24": 24
    }
  }

  getDummyData() {
    this.setState({
      data: [{
        "name": "Relative Crowdedness",
        "values": Object.keys(this.barData).map((key) => {
          return {"x" : key, "y" : this.barData[key]}
        })
        }]
    });
    console.log('getDummyData invoked!');
    console.log('getDummyData complete!');
  }

  graph() {
    return this.state.data ? ( <div>
        <h1>hi!</h1>

        <Graph
          data={this.state.data}
          getDummyData={this.getDummyData.bind(this)}
        />
        <BarChart
          data={this.state.data}
          width={500}
          height={200}
          fill={'#3182bd'}
          title='Bar Chart'
          yAxisLabel='business'
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
