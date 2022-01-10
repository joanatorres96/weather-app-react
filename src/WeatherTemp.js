import React from "react";

export default function WeatherTemp(props){
 
    return(
        <div className="WeatherTemp">
        <span className="temperature" id="temp">{Math.round(props.celsius)}</span>
        <span className="unit" id="units">ºC</span>
        </div>  );
}


