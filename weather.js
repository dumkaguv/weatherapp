import UserInfo from "./userInfo.js";

export default class Weather {
  constructor(
    apiKeyWeather,
    baseUrl = "https://api.openweathermap.org/data/2.5/weather?"
  ) {
    this.apiKeyWeather = apiKeyWeather;
    this.baseUrl = baseUrl;
    this.weatherData = [];
  }

  async getWeatherData(city) {
    await this.fetchWeatherData(city);
    return this.parseWeatherData(this.weatherData);
  }

  async fetchWeatherData(city) {
    let baseUrlWithEndPoints = this.getResponseTemplate(city);
    try {
      let response = await fetch(baseUrlWithEndPoints);
      if (!response.ok) {
        return;
      }
      let data = await response.json();
      this.weatherData.push(data);
    } catch (error) {
      //console.log(error);
    }
  }

  getResponseTemplate(city) {
    return `${this.baseUrl}q=${city}&units=metric&appid=${this.apiKeyWeather}`;
  }

  parseWeatherData() {
    if (this.weatherData.length === 0) return {};

    const data = this.weatherData[0];
    return {
      temperature: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      icon: data.weather[0].main,
      city: data.name,
    };
  }
}
