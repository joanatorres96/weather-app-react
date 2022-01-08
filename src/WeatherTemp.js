import React, { useState } from "react";

export default function WeatherTemp(props){
    let [unit, setUnit]= useState("metric");
    let fahrenheit= Math.round((props.celsius *9 /5) + 32);
 
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("Fahrenheit");
    }
    
    function showCelsius(event){
        event.preventDefault();
        setUnit("Celsius");
    }

    if (unit === "Fahrenheit"){
      return(
        <div className="WeatherTemp">
        <span className="temperature">{fahrenheit}</span>
        <span className="unit" id="units"><a href="/" onClick={showCelsius} id="link">ºC</a> | ºF</span>
       </div> 
   
);
}else{
    return(
        <div className="WeatherTemp">
        <span className="temperature" id="temp">{Math.round(props.celsius)}</span>
        <span className="unit" id="units">ºC | <a href="/" onClick={showFahrenheit} id="link">ºF</a> </span>
        </div>  );
}

}