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
  document.getElementById("currentData").innerHTML = "Today is " + utc;
  $('#currentData').css({"color": "#135A73", "font-size": "150%", "font-weight": "bold", "text-decoration":" underline"});
 // $('#todayWeather').css({"border": "3px  solid blue"});
 $('#todayWeather p').css({"margin-bottom": "5px"});
 $('#humidity').css({"color": "#CD0731"});
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


$('#temp').css({"color": "#3E6FC6", "font-size": "100%", "font-weight": "bold"});  // to change CSS properties of an object

    }



  });



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

var weatherHTML = "";

for( var index = 1; index < 6; index++ ) {
  var monthName =  result.forecast.simpleforecast.forecastday[index].date.monthname;
  var dayNum = result.forecast.simpleforecast.forecastday[index].date.day;
  var pic = '<img src=' + result.forecast.simpleforecast.forecastday[index].icon_url + '>';
  var temperature = result.forecast.simpleforecast.forecastday[index].high.celsius + "&degC" + "/" + result.forecast.simpleforecast.forecastday[index].low.celsius + "&degC";
  var condition = result.forecast.simpleforecast.forecastday[index].conditions;
  var humidity = result.forecast.simpleforecast.forecastday[index].avehumidity + "%";


  weatherHTML += '<div class="day"><p id="month1">' + monthName + ',' + ' </p><p id="day1">' + dayNum + '</p><p id="iconDay1">' + pic + '</p><p id="temperatureDay1">' + temperature + '</p><p id="conditionDay1">' + condition + '</p><p id="humidityDay1">' + humidity + '</p> </div>';

}
$('#weatherForecast').html(weatherHTML);
}


});


}

