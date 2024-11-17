import { Weather } from "./weather.js";

const apiKey = "e5d67ee55035c222d21d4e526c64b3e9";
const city = "London";
const weather = new Weather(apiKey);

weather
  .getWeatherData(city)
  .then((weatherInfo) => {
    console.log(weatherInfo);
  })
  .catch((error) => {
    console.error(error);
  });
