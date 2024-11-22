export default class UserInfo {
  constructor(apiKeyIP, baseUrl = "https://ipinfo.io/json?token=") {
    this.apiKeyIP = apiKeyIP;
    this.baseUrl = baseUrl;
  }

  async getUserCityByIP() {
    const response = await fetch(this.baseUrl + this.apiKeyIP);
    const data = await response.json();
    return data.city;
  }
}
