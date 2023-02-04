import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
