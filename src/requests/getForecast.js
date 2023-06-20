import axios from "axios";

const getForecast = () => {
  const endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  axios.get(endpoint).then((response) => console.log(response.data));
};
