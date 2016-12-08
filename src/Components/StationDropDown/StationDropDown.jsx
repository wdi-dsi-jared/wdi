import React, { Component } from 'react';
import style from './StationDropDown.css'
import logo from '../App/Assets/main.jpg'

export default class StationDropDown extends Component {

  makeTags(array) {
    return array.map((station, index) => {
      return (
        <option value ={station} key={index}>
          {station}
        </option>
      )
    });
  }

  render(){
    return (
      <select className={style['main']} onChange={(e)=>this.props.changeSelected(e)}>
        {this.makeTags(this.props.stations)}
      </select>
    );
  }
}
