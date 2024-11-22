import UserInfo from "./userInfo.js";

export default class Weather {
  constructor(
    apiKeyWeather,
    apiKeyIP,
    baseUrl = "https://api.openweathermap.org/data/2.5/weather?"
  ) {
    this.apiKeyWeather = apiKeyWeather;
    this.apiKeyIP = apiKeyIP;
    this.baseUrl = baseUrl;
    this.weatherData = [];
    //this.getInitialData();
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
        console.log("HTTP ошибка: ", response.status);
        return;
      }
      let data = await response.json();
      this.weatherData.push(data);
    } catch (error) {
      console.log(error);
    }
  }

  //async getInitialData() {
    //const userInfo = new UserInfo(this.apiKeyIP);
    //const city = await userInfo.getUserCityByIP();  
    //await this.fetchWeatherData(city)
  //}

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
