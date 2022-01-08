import React from "react";
import axios from "axios";
import ReactAnimatedWeather from 'react-animated-weather';
import "./Weather.css";

export default function Weather(){
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
    <h2>City Name 12º C</h2>
    <h4>Cloudy</h4>
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
        <li className="weather-info">Percipitation: 50%</li>
        <li className="weather-info">Humidity: 70%</li>
        <li className="weather-info">Wind: 3 Km/h</li>
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
}