import React from "react";

import { WeatherForm } from "WeatherForm";
import { WeatherResult } from "WeatherResult";
import { getTemp } from 'app/api/openWeatherMap.jsx';
// const openWeatherMap = require('openWeatherMap');

export class Weather extends React.Component {

  constructor() {
      super();
      this.state = {
            isLoading:false
      };
  }

  handleSearch(location) {
    this.setState({isLoading:true});
    const that = this;
    getTemp(location).request.then(function(data){
      that.setState({
        location: data.name,
        temp: data.main.temp,
        isLoading: false
      });
    }, function(errorMessage){
      that.setState({
        isLoading:false,
      });
      alert(errorMessage);
    })
  }

  render() {
    let result;
    const state = this.state
    if(state.isLoading){
      result = <h3 className="text-center">Fetching Weather</h3>
    } else if(state.temp && state.location){
      result = <WeatherResult data={state} />
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch = {this.handleSearch.bind(this)}/>
        {result}
      </div>
    );
  }
}
