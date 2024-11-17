export class Weather {
  constructor(
    apiKey,
    baseUrl = "https://api.openweathermap.org/data/2.5/weather?"
  ) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.weatherData = [];
  }

  async getWeatherData(city) {
    await this.fetchWeatherData(city);
    return this.parseWeatherData(this.weatherData);
  }

  fetchWeatherData(city) {
    return new Promise((resolve, reject) => {
      let baseUrlWithEndPoints = this.getResponseTemplate(city);
      fetch(baseUrlWithEndPoints)
        .then((data) => {
          if (!data.ok) {
            reject(`HTTP ошибка: ${data.status}`);
            return;
          }
          return data.json();
        })
        .then((jsonData) => {
          this.weatherData.push(jsonData);
          resolve();
        })
        .catch((error) => {
          reject(`Ошибка при получении данных о погоде: ${error.message}`);
        });
    });
  }

  getResponseTemplate(city) {
    return `${this.baseUrl}q=${city}&units=metric&appid=${this.apiKey}`;
  }

  parseWeatherData() {
    if (this.weatherData.length === 0) return {};

    const data = this.weatherData[0];
    return {
      temperature: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    };
  }
}
