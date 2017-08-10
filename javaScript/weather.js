// http://api.wunderground.com/api/Your_Key/conditions/q/CA/San_Francisco.json
// 



$(document).ready(function(){
  getData();
  // getTime();
  getTodayWeather();
  getWeather();
});

function getData(){
  var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  document.getElementById("currentData").innerHTML = utc;
}

function getTime(){
var d = new Date(); // for now
//d.toLocaleString('de-DE', {hour: '2-digit',   hour12: false, timeZone: 'Europe/London' });
document.getElementById("currentTime").innerHTML = d.toLocaleString('de-DE', {hour: '2-digit',   hour12: false, timeZone: 'Europe/London' }) + ":" + d.getMinutes() + ":" + d.getSeconds();
  //d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(); 
}

function getTodayWeather(){

  var weatherApi = "http://api.wunderground.com/api/85fc5a6dee9bcfec/conditions/q/UK/Nantwich.json";

  $.getJSON(weatherApi, function(result)
  {
    if (result !== null) {
      console.log(result);

      var pic = result.current_observation.image.url;
      console.log(result.current_observation.image.url);

      document.getElementById("pic").innerHTML = '<img src=' + result.current_observation.icon_url + '>';

      document.getElementById("temp").innerHTML =  result.current_observation.temp_c + "&degC";
      document.getElementById("humidity").innerHTML =  result.current_observation.relative_humidity;
      document.getElementById("weather").innerHTML =  result.current_observation.weather;


    }



  });

//   $.getJSON(weatherApi, function(result)
//   {
//     if (result !== null) {

// //document.getElementById("demo").innerHTML =  result.current_observation.temp_c;
// var pic = result.current_observation.image.url;
// console.log(result.current_observation.image.url);

// document.getElementById("pic").innerHTML = '<img src=' + result.current_observation.icon_url + '>';


//       // $.each(result.items, function(i, item) {                 

//       // });
//     }



//   });


//relative_humidity



//weather


}

function getWeather(){

  var weatherApi = "http://api.wunderground.com/api/85fc5a6dee9bcfec/forecast10day/q/UK/Nantwich.json";


//5 days forecast
$.getJSON(weatherApi, function(result)
{
  if (result !== null) {
    console.log(result);
//document.getElementById("weatherFor").innerHTML =  result.forecast.simpleforecast.forecastday[0].date.pretty;

// //To create a text before actual temperature
// $(function(){
//   $("#weatherFor").prepend("<p>High temperature: </p>");
// });

document.getElementById("month1").innerHTML =  result.forecast.simpleforecast.forecastday[1].date.monthname + ", ";
document.getElementById("day1").innerHTML =  result.forecast.simpleforecast.forecastday[1].date.day;

document.getElementById("iconDay").innerHTML = '<img src=' + result.forecast.simpleforecast.forecastday[1].icon_url + '>';
document.getElementById("temperatureDay").innerHTML = result.forecast.simpleforecast.forecastday[1].high.celsius + "&degC" + "/" + result.forecast.simpleforecast.forecastday[1].low.celsius + "&degC";
document.getElementById("conditionDay").innerHTML =  result.forecast.simpleforecast.forecastday[1].conditions;
document.getElementById("humidityDay").innerHTML = result.forecast.simpleforecast.forecastday[1].avehumidity + "%";


//day 2

document.getElementById("month2").innerHTML =  result.forecast.simpleforecast.forecastday[2].date.monthname + ", ";
document.getElementById("day2").innerHTML =  result.forecast.simpleforecast.forecastday[2].date.day;

document.getElementById("iconDay2").innerHTML = '<img src=' + result.forecast.simpleforecast.forecastday[2].icon_url + '>';
document.getElementById("temperatureDay2").innerHTML = result.forecast.simpleforecast.forecastday[2].high.celsius + "&degC" + "/" + result.forecast.simpleforecast.forecastday[1].low.celsius + "&degC";
document.getElementById("conditionDay2").innerHTML =  result.forecast.simpleforecast.forecastday[2].conditions;
document.getElementById("humidityDay2").innerHTML = result.forecast.simpleforecast.forecastday[2].avehumidity + "%";


//day 3

document.getElementById("month3").innerHTML =  result.forecast.simpleforecast.forecastday[3].date.monthname + ", ";
document.getElementById("day3").innerHTML =  result.forecast.simpleforecast.forecastday[3].date.day;

document.getElementById("iconDay3").innerHTML = '<img src=' + result.forecast.simpleforecast.forecastday[3].icon_url + '>';
document.getElementById("temperatureDay3").innerHTML = result.forecast.simpleforecast.forecastday[3].high.celsius + "&degC" + "/" + result.forecast.simpleforecast.forecastday[1].low.celsius + "&degC";
document.getElementById("conditionDay3").innerHTML =  result.forecast.simpleforecast.forecastday[3].conditions;
document.getElementById("humidityDay3").innerHTML = result.forecast.simpleforecast.forecastday[3].avehumidity + "%";


}



});


}

// function setWeatherOnPage(){
//   document.getElementById("demo").innerHTML = getWeather();
// }