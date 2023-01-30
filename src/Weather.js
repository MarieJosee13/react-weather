import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    let icon = response.data.weather[0].icon;
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00AM",
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
        <div className="Header">
          <h1>{weatherData.city}</h1>
        </div>
        <div className="row Description">
          <div className="col-2">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              width="150"
            />
          </div>
          <div className="col-2">
            <ul>
              <li>{Math.round(weatherData.temperature)}°C</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-8">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
        <div className="row FiveDay">
          <div className="col-3">
            <p>
              9°C <br />
              <img
                src="https://cdn-icons-png.flaticon.com/512/3313/3313908.png"
                alt=""
                width="35"
              />
            </p>
          </div>
          <div className="col-3">
            <p>
              6°C <br />
              <img
                src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"
                alt=""
                width="30"
              />
            </p>
          </div>
          <div className="col-3">
            <p>
              5°C
              <br />
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                width="35"
              />
            </p>
          </div>
          <div className="col-3 ">
            <p>
              7°C
              <br />
              <img
                src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"
                alt=""
                width="30"
              />
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f7815b5c84360cbf0249b88f693e85bf";
    let city = "Vancouver";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}
          &appid=${apiKey}units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
