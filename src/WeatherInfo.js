import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Header">
        <h1>{props.data.city}</h1>
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row Description">
        <div className="col-2">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            width="150"
          />
        </div>
        <div className="col-2">
          <h3>{Math.round(props.data.temperature)}°C</h3>
        </div>
        <div className="col-8">
          <ul>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
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
              src={props.data.iconUrl}
              alt={props.data.description}
              width="30"
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
}
