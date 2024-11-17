import { ScreenController } from "./screenController.js";

async function main() {
  const apiKey = "e5d67ee55035c222d21d4e526c64b3e9";
  const screenController = new ScreenController(apiKey);
  screenController.clickHandler();

  return 0;
}

main();
