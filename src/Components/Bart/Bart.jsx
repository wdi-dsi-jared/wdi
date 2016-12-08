import React, { Component } from 'react';
import { BarChart } from 'react-d3';
import '../App/App.css';

export default class Bart extends Component {

  render() {
    return (<BarChart
    data={this.props.data}
    width={this.props.width}
    height={this.props.height}
    fill={this.props.fill}
    title={this.props.title}
    yAxisLabel={this.props.yAxisLabel}
    xAxisLabel={this.props.xAxisLabel}
    />)
  }
}
