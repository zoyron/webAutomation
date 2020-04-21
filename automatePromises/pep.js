require("chromedriver");
let swd = require("selenium-webdriver");
let credentials = require("./credentials.json");

let cre = JSON.parse(JSON.stringify(credentials));

let bldr = new swd.Builder();
let driver = bldr.forBrowser("chrome").build();

driver
  .get("https://www.pepcoding.com/login")
  .then(() => {
    return driver.findElement(swd.By.css("input[type=email]"));
  })
  .then((emailElement) => {
    return emailElement.sendKeys(cre.username);
  })
  .then(() => {
    return driver.findElement(swd.By.css("input[type=password]"));
  })
  .then((passElement) => {
    return passElement.sendKeys(cre.password);
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
