import ScreenController from "./screenController.js";
import UserInfo from "./userInfo.js";
import LoadingAnimation from "./loadingAnimation.js";

const apiKeyWeather = "e5d67ee55035c222d21d4e526c64b3e9";
const apiKeyIP = "1ad9bf706a15a3";

const userInfo = new UserInfo(apiKeyIP);
const loadingAnimation = new LoadingAnimation();
const screenController = new ScreenController(apiKeyWeather, userInfo, loadingAnimation);
