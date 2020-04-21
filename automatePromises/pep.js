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
    return emailElement.sendKeys("I think, I am getting it");
  })
  .then(() => {
    console.log("email has been entered");
  })
  .catch((err) => {
    console.log(err);
  });
