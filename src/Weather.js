import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div>
        <form>
          <input
            className="SearchCity"
            type="search"
            placeholder="Enter a city..."
          ></input>
          <input type="submit" value="search"></input>
        </form>
        <div className="Header">
          <h1>Vancouver</h1>
          <img
            src="https://png.pngtree.com/png-vector/20190627/ourlarge/pngtree-cloudy-icon-design-png-image_1515929.jpg"
            alt=""
            width="150"
          />
        </div>
        <div className="Description">
          <ul>
            <li>6°C</li>
            <li>Cloudy</li>
          </ul>
          <ul>
            <li>Humidity: 97%</li>
            <li>Wind: 10km/h</li>
          </ul>
        </div>
        <div>
          <ul className="FiveDay">
            <li>
              9°C <br />
              <img
                src="https://png.pngtree.com/png-vector/20190627/ourlarge/pngtree-cloudy-icon-design-png-image_1515929.jpg"
                alt=""
                width="35"
              />
            </li>
            <li>
              6°C <br />
              <img
                src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"
                alt=""
                width="30"
              />
            </li>
            <li>
              5°C
              <br />
              <img
                src="https://png.pngtree.com/png-vector/20190627/ourlarge/pngtree-cloudy-icon-design-png-image_1515929.jpg"
                alt=""
                width="35"
              />
            </li>
            <li>
              7°C
              <br />
              <img
                src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"
                alt=""
                width="30"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
