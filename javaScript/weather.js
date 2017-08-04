// http://api.wunderground.com/api/Your_Key/conditions/q/CA/San_Francisco.json
// 



$(document).ready(function(){
  getData();
  getWeather();
});

function getData(){
  var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
document.getElementById("currentData").innerHTML = utc;
}

function getWeather(){

  var weatherApi = "http://api.wunderground.com/api/85fc5a6dee9bcfec/conditions/q/CA/Nantwich.json";

  $.getJSON(weatherApi, function(result)
  {
    if (result !== null) {
      console.log(result);
document.getElementById("temp").innerHTML =  result.current_observation.temp_c;
//document.getElementById("demo").innerHTML =  result.current_observation.image.url;

      // $.each(result.items, function(i, item) {                 

      // });
    }



  });

$.getJSON(weatherApi, function(result)
  {
    if (result !== null) {
      
//document.getElementById("demo").innerHTML =  result.current_observation.temp_c;
var pic = result.current_observation.image.url;
console.log(result.current_observation.image.url);

document.getElementById("pic").innerHTML = '<img src=' + result.current_observation.icon_url + '>';


      // $.each(result.items, function(i, item) {                 

      // });
    }



  });


//relative_humidity

$.getJSON(weatherApi, function(result)
  {
    if (result !== null) {
      console.log(result);
document.getElementById("humidity").innerHTML =  result.current_observation.relative_humidity;

      // $.each(result.items, function(i, item) {                 

      // });
    }



  });


//weather
$.getJSON(weatherApi, function(result)
  {
    if (result !== null) {
      console.log(result);
document.getElementById("weather").innerHTML =  result.current_observation.weather;

      // $.each(result.items, function(i, item) {                 

      // });
    }



  });



}

// function setWeatherOnPage(){
//   document.getElementById("demo").innerHTML = getWeather();
// }