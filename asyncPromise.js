let fs = require("fs");
console.log("before");
console.log("start");
let fileWillBeReadPromise = fs.promises.readFile("file .html");

fileWillBeReadPromise.then(function (content) {
  console.log(content + " ");
  console.log("finish");
});

fileWillBeReadPromise.catch(function (err) {
  console.log(err);
});

console.log("after");
console.log("I will execute");
