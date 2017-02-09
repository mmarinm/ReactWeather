import React from "react";

const WeatherResult = ({data}) => {
  return (
      <h3>Current weather in {data.location} is {data.temp}</h3>
  );
}

export {WeatherResult}
