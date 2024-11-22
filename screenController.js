import Weather from "./weather.js";
import UserInfo from "./userInfo.js";

export default class ScreenController {
  constructor(apiKeyWeather, apiKeyIP) {
    this.apiKeyWeather = apiKeyWeather;
    this.apiKeyIP = apiKeyIP;
    this.renderInitialValues();
    this.clickHandler();
  }

  async getCityByIP() {
    const userInfo = new UserInfo(this.apiKeyIP);
    const city = await userInfo.getUserCityByIP();
    return city;
  }

  getCity() {
    const city = document.querySelector(".weather__input");
    if (city.value.length === 0) return;
    return city.value;
  }

  async renderInitialValues() {
    await this.renderValues();
  }

  async getWeatherData() {
    const weather = new Weather(this.apiKeyWeather, this.apiKeyIP);
    const city = this.getCity()
      ? this.getCity()
      : await this.getCityByIP();
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
