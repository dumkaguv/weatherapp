import { Weather } from "./weather.js";

export class ScreenController {
  constructor(apikey) {
    this.apiKey = apikey;
  }

  getCity() {
    const city = document.querySelector(".weather__input");
    if (city.value.length === 0) return "Chisinau";
    return city.value;
  }

  async getWeatherData() {
    const weather = new Weather(this.apiKey);
    const city = this.getCity();
    const weatherData = await weather.getWeatherData(city);
    return weatherData;
  }

  clickHandler() {
    const searchButton = document.querySelector(".weather__search-button");
    searchButton.addEventListener("click", () => {
      this.renderValues();
    });
  }

  async renderValues() {
    const image = document.querySelector(".weather__image");
    const temperature = document.querySelector(".weather__info-temp");
    const city = document.querySelector(".weather__info-city");
    const humidity = document.querySelector(".weather__humidity-value");
    const windSpeed = document.querySelector(".weather__windSpeed-value");

    const data = await this.getWeatherData();
    const {
      temperature: temperatureVal,
      humidity: humidityVal,
      wind: windSpeedVal,
      icon: imageVal,
      city: cityVal,
    } = data;

    image.src = `./images/${imageVal.toLowerCase()}.png`;
    temperature.textContent = `${temperatureVal}°C`;
    city.textContent = cityVal;
    humidity.textContent = `${humidityVal}%`;
    windSpeed.textContent = `${windSpeedVal} km/h`;
  }
}
