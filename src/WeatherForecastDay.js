import React from "react";

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
    <div>
      <p>
        <div className="ForecastDay">{day()}</div>
        <span className="HighTemp">{maxTemperature()}°C</span> <br />
        <img className="DailyIcon" src={Icon()} alt="" width="35" />
        <span className="LowTemp">{minTemperature()}°C</span> <br />
      </p>
    </div>
  );
}
