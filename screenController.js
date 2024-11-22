import Weather from "./weather.js";

export default class ScreenController {
  constructor(apiKeyWeather, userInfo, loadingAnimation) {
    this.apiKeyWeather = apiKeyWeather;
    this.userInfo = userInfo;
    this.loadingAnimation = loadingAnimation;

    this.renderInitialValues();
    this.clickHandler();
  }

  async getCityByIP() {
    return await this.userInfo.getUserCityByIP();
  }

  getCityByInput() {
    const city = document.querySelector(".weather__input");
    if (city.value.length === 0) return;
    return city.value;
  }

  async renderInitialValues() {
    await this.renderValues();
  }

  async getWeatherData() {
    const weather = new Weather(this.apiKeyWeather);
    const city = this.getCityByInput() || (await this.getCityByIP());
    const weatherData = await weather.getWeatherData(city);
    return weatherData;
  }

  clickHandler() {
    const searchButton = document.querySelector(".weather__search-button");
    searchButton.addEventListener("click", () => this.renderValues());
  }

  async renderValues() {
    const weatherWrapper = ".weather-wrapper";
    this.loadingAnimation.show(weatherWrapper);

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

    this.loadingAnimation.hide(weatherWrapper);
  }
}
