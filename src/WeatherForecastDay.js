import React from "react";
import "./WeatherForecastDay.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return ` ${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return ` ${temperature}`;
  }
  function day() {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
  }

  return (
    <div className="LongRangeForecast">
      <div className="ForecastDay">{day()}</div>
      <div className="float-left">
        <WeatherIcon code={props.data.weather[0].icon} size={35} />
      </div>
      <span className="HighTemp">{maxTemperature()}°C</span>
      <br />
      <span className="LowTemp">{minTemperature()}°C</span>
    </div>
  );
}
