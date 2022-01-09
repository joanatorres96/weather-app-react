import React from "react";
import Icon from "./Icon";


export default function DailyForecast(props){

    function showDay(){
        let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let date= new Date(props.data.dt * 1000);
        let day= days[date.getDay()];
    return day;
    }
    
    return(
      
    <div className="DailyForecast">
            <div className="forecast-day">
                {showDay()}
            </div>
            <div className="forecast-icon"> 
            <Icon icon={props.data.weather[0].icon} size={40} />
            </div>
            <div className="forecast-temp">
                <span className="temp-max">{Math.round(props.data.temp.max)}º / </span> 
                <span className="temp-min"> {Math.round(props.data.temp.min)}º</span>
            </div>
        </div> 
    );



}