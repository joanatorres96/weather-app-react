import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css"
import DailyForecast from "./DailyForecast";
import LoadingIcons from "react-loading-icons";

export default function Forecast (props){
    let [forecastLoaded, setForecastLoaded] = useState(false);
    let [forecastData, setForecastData] = useState("");

    function forecastResponse(response){
        console.log(response.data);
        setForecastLoaded(true);
        setForecastData(response.data.daily);
    }

  if(forecastLoaded){
    
   return(    
 <div className="Forecast">
     <div className="row text-center my-5">
     {forecastData.map(function(forecastDay, index){
    if (index < 6){
     return(
  <div className="col-sm" key={index}>
   <DailyForecast data={forecastDay} />
 </div> 
    );}})}
    </div>
    </div>
    );
  }else{
    let apiKey= "9b6319aa2aea8b77048b5f6158d3cba8";
    let unit= "metric";
    let lat= props.coords.lat;
    let lon= props.coords.lon;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(forecastResponse);
  
    return(
        <div className=" text-center m-5">
        <LoadingIcons.TailSpin stroke="#179479" className="loader" />
        <br /><br />
        Loading Forecast...
        </div>
        );
    }
}
