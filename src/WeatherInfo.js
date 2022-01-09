import React from "react";
import CurrentDate from "./CurrentDate"
import Icon from "./Icon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props){

return(
<div className="WeatherInfo">
<h5 className="mt-2"><CurrentDate date={props.info.date} /></h5> 
<div className="row mt-4 mb-4">
<div className="col-sm-4 p-0  ms-4 text-end">
    <h1>{props.info.city}</h1>
    <WeatherTemp celsius={props.info.temperature} />
    
   </div>
   <div className="col-sm-1 mx-3 p-0 mt-1 text-center"> 
     <Icon icon={props.info.icon} />
     </div>

<div className="col-sm-3 p-0 mt-2 me-2 text-start " >       
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