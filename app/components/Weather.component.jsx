import React from "react";

import { WeatherForm } from "WeatherForm";
import { WeatherResult } from "WeatherResult";
import { getTemp } from "openWeatherMap";
// const openWeatherMap = require('openWeatherMap');

export class Weather extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
            location: 'Miami',
            temp: 88
      };
  }

  handleSearch(location) {

    const that = this;
    getTemp(location).request.then(function(data){
      that.setState({
        location: data.name,
        temp: data.main.temp
      });
    }, function(errorMessage){
      console.log(errorMessage);
    })
  }

  render() {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch = {this.handleSearch.bind(this)}/>
        <WeatherResult data={this.state} />
      </div>
    );
  }
}
