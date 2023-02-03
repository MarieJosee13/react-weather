import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row FiveDay">
        <div className="col-3">
          <p>
            <span className="HighTemp">9°C</span> <br />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3313/3313908.png"
              alt=""
              width="35"
            />
            <span className="LowTemp">3°C</span> <br />
          </p>
        </div>
      </div>
    </div>
  );
}
