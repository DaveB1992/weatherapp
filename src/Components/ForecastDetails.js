import React from "react";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__min-temp">
        <p>Min temperature: </p> {temperature.min} &deg;C
      </div>
      <div className="forecast-details__max-temp">
        <p>Max temperature: </p> {temperature.max} &deg;C
      </div>
      <div className="forecast-details__humidity">
        <p>Humidity:</p> {humidity} %
      </div>
      <div className="forecast-details__wind">
        <p>Wind Speed: </p> {wind.speed} mph
      </div>
    </div>
  );
}

export default ForecastDetails;
