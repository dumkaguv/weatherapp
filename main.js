import ScreenController from "./screenController.js";

const apiKeyWeather = "e5d67ee55035c222d21d4e526c64b3e9";
const apiKeyIP = "1ad9bf706a15a3";
const screenController = new ScreenController(apiKeyWeather, apiKeyIP);

/*
fetch('https://ipinfo.io/json?token=1ad9bf706a15a3')
    .then(response => response.json())
    .then(data => {
        console.log(`Город: ${data.city}, Регион: ${data.region}, Страна: ${data.country}`);
    })
    .catch(error => console.error('Ошибка определения местоположения:', error));
*/