import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Weather defaultCity="Vancouver" />
    <div>
      <p>
        Open Source code by Marie-Josée Dubé on{" "}
        <a
          href="https://github.com/MarieJosee13/react-weather"
          rel="noreferrer"
          target="_blank"
          className="openSource"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  </React.StrictMode>
);

reportWebVitals();
