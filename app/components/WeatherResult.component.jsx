import React from "react";

const WeatherResult = ({data}) => {
  return (
      <h3 className="text-center">Current weather in {data.location} is {data.temp}</h3>
  );
}

export {WeatherResult}
