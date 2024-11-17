import { Weather } from "./weather.js";

const apiKey = "e5d67ee55035c222d21d4e526c64b3e9";
const city = "Chisinau";
const weather = new Weather(apiKey);
const weatherData = await weather.getWeatherData(city);
console.log(weatherData);
