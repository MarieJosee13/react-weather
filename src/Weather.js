import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Vancouver</h1>
      </div>
      <div className="row Description">
        <div className="col-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3313/3313908.png"
            alt=""
            width="150"
          />
        </div>
        <div className="col-2">
          <ul>
            <li>6°C</li>
            <li>Cloudy</li>
          </ul>
        </div>
        <div className="col-8">
          <ul>
            <li>Humidity: 97%</li>
            <li>Wind: 10km/h</li>
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
              src="https://cdn-icons-png.flaticon.com/512/3313/3313908.png"
              alt=""
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
}
