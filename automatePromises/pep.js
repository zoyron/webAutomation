require("chromedriver");
let swd = require("selenium-webdriver");

let bldr = new swd.Builder();
let driver = bldr.forBrowser("chrome").build();

driver
  .get("https://www.pepcoding.com/login")
  .then(() => {
    return driver.findElement(swd.By.css("input[type=email]"));
  })
  .then((emailElement) => {
    return emailElement.sendKeys("sgrarora3@gmail.com");
  })
  .then(() => {
    return driver.findElement(swd.By.css("input[type=password]"));
  })
  .then((passElement) => {
    return passElement.sendKeys("");
  })
  .then(() => {
    return driver.findElement(swd.By.css("button[type=submit]"));
  })
  .then((buttonElement) => {
    return buttonElement.sendKeys("\n");
  })
  .catch((err) => {
    console.log(err);
  });
