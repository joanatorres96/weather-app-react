import React from "react";

//props.date
export default function CurrentDate(props){
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day= days[props.date.getDay()];
let hour= props.date.getHours();
let minute= props.date.getMinutes();
if (minute < 10){ minute = `0${minute}`;}

return(<div>{day}, {hour}:{minute}</div>); 

}