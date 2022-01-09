import React from "react";
import CurrentDate from "./CurrentDate"
import Icon from "./Icon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props){

return(
<div className="WeatherInfo">
<h5 className="mt-2"><CurrentDate date={props.info.date} /></h5> 
<div className="row my-4 mx-1">

<div className="col-sm-5 p-0 me-5 text-end" id="principalInfo">
    <h1>{props.info.city}</h1>
    <WeatherTemp celsius={props.info.temperature} />
    
   </div>
   <div className="col-sm-1 p-0 mt-3 text-center"> 
     <Icon icon={props.info.icon} />
     </div>

<div className="col-sm-3 p-0 mt-3 ms-1 text-start " id="details" >       
    <ul>
        <li className="weather-info"><h5 className="text-capitalize">{`${props.info.description}`}</h5></li>
        <li className="weather-info">{`Humidity: ${props.info.humidity}%`}</li>
        <li className="weather-info">{`Wind: ${props.info.windSpeed} Km/h`}</li>
    </ul>
</div>
     </div>
</div>
);
}