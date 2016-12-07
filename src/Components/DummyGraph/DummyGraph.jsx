import React, { Component } from 'react';
const Chart = require('react-d3-core').Chart;
const LineChart = require('react-d3-basic').LineChart;

export default class DummyGraph extends Component {

  render() {
    return(
      <div>
      <Chart
      title={'User Sample'}
      width={700}
      height={300}
      margins= {{left: 100, right: 100, top: 50, bottom: 50}}
      >
      <LineChart
        margins= {{left: 100, right: 100, top: 50, bottom: 50}}
        title={'User Sample'}
        data={this.props.data}
        width={700}
        height={300}
        chartSeries={[
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
    ]}
        x={(d) => d.index}
      />
      </Chart>
        <button onClick={this.props.getDummyData}>click to get data</button>
      </div>
    )
  }
}
