require("chromedriver");
let swd = require("selenium-webdriver");

let bldr = new swd.Builder();

let driver = bldr.forBrowser("chrome").build();

let googlePageWillBeOpened = driver.get("https://www.pepcoding.com/login");

googlePageWillBeOpened.then(() => {
  let emailWillBeSelected = driver.findElement(swd.By.css("input[type=email]")); // this will return a promise that email will be selected
  return emailWillBeSelected;
});

googlePageWillBeOpened.catch((err) => {
  console.log(err);
});
