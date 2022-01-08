import React, {useState} from "react";
import axios from "axios";
import LoadingIcons from 'react-loading-icons';
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
    let [weatherInfo, setWeatherInfo] = useState({ ready:false});
    let [city, setCity]= useState(props.city);
    
function weatherResponse(response){
    console.log(response.data);
   setWeatherInfo({
       ready: true,
       date: new Date(response.data.dt*1000),
       city: response.data.name,
       temperature: Math.round(response.data.main.temp),
       description: response.data.weather[0].description,
       humidity: Math.round(response.data.main.humidity),
       windSpeed: (response.data.wind.speed),
       icon: response.data.weather[0].icon,
   })}

   function searchData(){
    let apiKey= "bfe2f28f38a462ece1d27d383dea4139";
    let unit= "metric";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(weatherResponse);
   }

   function updateInfo(event){
       event.preventDefault();
       searchData();
   }
  function updateWeatherInfo(event){
  setCity(event.target.value);
}

////////////////////////////////////////////////////////////////////////////

    if(weatherInfo.ready){
return( 
<div className="Weather">
<form onSubmit={updateInfo}>
<div className="row">
    <div className="col-sm-8">
<input type={"text"} placeholder="Enter a city..." className="mt-2 w-100 shadow-sm" id="search-bar" onChange={updateWeatherInfo}/>
</div>
<div className="col-sm-2 ">
<input type={"submit"} value={"Search"} className="mt-2 w-100 shadow-sm fw-bold fs-6" id="search-button" />
</div>
</div>
</form>
<WeatherInfo info={weatherInfo}/>
</div>
);
}else{
    searchData();
       return(
        <div className=" text-center m-5">
        <LoadingIcons.TailSpin stroke="#179479" className="loader" />
        <br /><br />
        Loading...
        </div>
        );
       }
}