import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    // eslint-disable-next-line no-undef
    appid: process.env.REACT_APP_OWM_KEY,
    units: "metric", // Celsius
    lang: "en",   // descrições em inglês
  },
});

export const getCurrentWeather = (city) =>
  api.get("/weather", { params: { q: city } });

export const getForecast = (city) =>
  api.get("/forecast", { params: { q: city } });