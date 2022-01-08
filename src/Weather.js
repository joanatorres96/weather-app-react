import React, {useState} from "react";
import axios from "axios";
import ReactAnimatedWeather from 'react-animated-weather';
import LoadingIcons from 'react-loading-icons';
import "./Weather.css";

export default function Weather(){
    let [weatherInfo, setWeatherInfo] = useState({ ready:false});
    let[city,setCity]= useState("Lisbon");
    

function weatherResponse(response){
    console.log(response.data);
    setCity(response.data.name);
   setWeatherInfo({
       ready: true,
       temperature: Math.round(response.data.main.temp),
       description: response.data.weather[0].description,
       humidity: Math.round(response.data.main.humidity),
       windSpeed: (response.data.wind.speed),
   })}
////////////////////////////////////////////////////////////////////////////

    if(weatherInfo.ready){
return(
<div className="Weather">
<div className="Form">

<form>
<div className="row">
    <div className="col-sm-8">
<input type={"text"} placeholder="Enter a city..." className="mt-2 w-100 shadow-sm" id="search-bar" />
</div>
<div className="col-sm-2 ">
<input type={"submit"} value={"Search"} className="mt-2 w-100 shadow-sm fw-bold fs-6" id="search-button" />
</div>
</div>
</form>
</div>

<div className="current-weather">
   <h2 className="mt-5">Thursday 20:00</h2> 
<div className="row mt-5 mb-4">
<div className="col-sm-5 text-end mt-3">
    <h2>{`${city} ${weatherInfo.temperature}ºC`}</h2>
    <h4 className="text-capitalize">{`${weatherInfo.description}`}</h4>
    </div>
<div className="col-sm-2 text-center"> 
      <ReactAnimatedWeather
       icon={"CLOUDY"}
       color={"BLACK"}
       size={"100px"}
       animate={"TRUE"}
       />
     </div>
<div className="col-sm-5 mt-3" >
    <ul>
        <li className="weather-info">{`Humidity: ${weatherInfo.humidity}%`}</li>
        <li className="weather-info">{`Wind: ${weatherInfo.windSpeed}Km/h`}</li>
    </ul>
</div>
    
  </div>
</div>
 <div className="Forecast">
     <h2 className="text-center mt-5">Forecast</h2>
     <div className="row mt-5 mb-5">
<div className="col-sm-2"> <ul> <li className="forecast-info">Day</li><li className="forecast-info">☀️</li><li className="forecast-info">15º/12º</li></ul></div>
<div className="col-sm-2"> <ul> <li className="forecast-info">Day</li><li className="forecast-info">☀️</li><li className="forecast-info">15º/12º</li></ul></div>
<div className="col-sm-2"> <ul> <li className="forecast-info">Day</li><li className="forecast-info">☀️</li><li className="forecast-info">15º/12º</li></ul></div>
<div className="col-sm-2"> <ul> <li className="forecast-info">Day</li><li className="forecast-info">☀️</li><li className="forecast-info">15º/12º</li></ul></div>
<div className="col-sm-2"> <ul> <li className="forecast-info">Day</li><li className="forecast-info">☀️</li><li className="forecast-info">15º/12º</li></ul></div>
<div className="col-sm-2"> <ul> <li className="forecast-info">Day</li><li className="forecast-info">☀️</li><li className="forecast-info">15º/12º</li></ul></div>
</div>
 </div>
</div>
);
}else{
    let city= "Lisbon";
    let apiKey= "bfe2f28f38a462ece1d27d383dea4139";
    let unit= "metric";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(weatherResponse);

    return(
        <div className=" text-center m-5">
        <LoadingIcons.TailSpin stroke="#179479" className="loader" />
        <br /><br />
        Loading...
        </div>
        );
       }
}