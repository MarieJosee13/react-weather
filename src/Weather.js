import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    let icon = response.data.weather[0].icon;
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather container">
        <form>
          <div className="row">
            <div className="col-7">
              <input
                className="SearchCity form-control"
                type="search"
                placeholder="Enter a city..."
              />
            </div>
            <div className="col-4 p-0">
              <input className="btn" type="submit" value="search" />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    let apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
