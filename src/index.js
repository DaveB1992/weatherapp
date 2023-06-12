import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./Components/App";
import forecast from "./data/forecast.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App location={forecast.location} forecasts={forecast.forecasts} />
  </React.StrictMode>
);
