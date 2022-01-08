import React from "react";
import CurrentDate from "./CurrentDate"
import Icon from "./Icon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props){

return(
<div className="WeatherInfo">
   <h2 className="mt-5"><CurrentDate date={props.info.date} /></h2> 
<div className="row mt-5 mb-4">
<div className="col-sm-5 text-end mt-3">
    <h2>{`${props.info.city}`}</h2>
    <WeatherTemp celsius={props.info.temperature} />
    <h4 className="text-capitalize">{`${props.info.description}`}</h4>
    </div>
<div className="col-sm-2 text-center"> 
     <Icon icon={props.info.icon} />
     </div>
<div className="col-sm-5 mt-3" >
    <ul>
        <li className="weather-info">{`Humidity: ${props.info.humidity}%`}</li>
        <li className="weather-info">{`Wind: ${props.info.windSpeed} Km/h`}</li>
    </ul>
</div>
    
  </div>
</div>
);
}