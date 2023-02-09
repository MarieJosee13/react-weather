import React from "react";
import "./WeatherForecastDay.css";

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
  function Icon() {
    let icon = props.data.weather[0].icon;
    let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return iconURL;
  }
  return (
    <div className="LongRangeForecast">
      <div className="ForecastDay">{day()}</div>

      <img className="DailyIcon" src={Icon()} alt="" width="37" />
      <br />
      <span className="HighTemp">{maxTemperature()}°C</span>
      <br />
      <span className="LowTemp">{minTemperature()}°C</span>
    </div>
  );
}
