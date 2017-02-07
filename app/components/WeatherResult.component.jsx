import React from "react";

export class WeatherResult extends React.Component {
  render() {
    const data = this.props.data;
    return (
        <h3>Current weather in {data.location} is {data.temp}</h3>
    );
  }
}
