// const axios = require('axios');
import axios  from "axios";

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b3abacf38c70be5888237eb1649986fe&units=imperial';

// var key = "&APPID=b3abacf38c70be5888237eb1649986fe";
// var  apiUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial"+ key;


export function getTemp(location) {

  let encodedLocation = encodeURIComponent(location);
  let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  const request = axios.get(requestUrl).then(function(res){
    if(res.data.cod && res.data.message){
      throw new Error(res.data.message);
    } else {
      return res.data;
    }
  }, function (res) {
    throw new Error(res.data.message);
  });
  return {
    request
  }
}


//
// module.exports = {
//   getTemp : function(location){
//     let encodedLocation = encodeURIComponent(location);
//     let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
//     console.log(requestUrl);
//
//     return axios.get(requestUrl).then(function(res){
//       if(res.data.cod && res.data.message){
//         throw new Error(res.data.message);
//       } else {
//         return res.data.main.temp;
//       }
//     }, function (res) {
//       throw new Error(res.data.message);
//     })
//   }
// }
