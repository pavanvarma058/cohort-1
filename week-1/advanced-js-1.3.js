const fs = require("fs");
/*
// Async using read a file

// Finally this one, because here the code running async and the txt file is in another
// location where it has to go and read, in mean time it will run other lines
// Even, if the contents of the file located, and came back it has to wait in the queue
// until the ongoing task completed, after the queue will gets logged...

fs.readFile("./a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
// First this will log
console.log("Hello World");
// Second
let counter = 0;
for (let i = 0; i < 1000; i++) {
  counter += i;
}
console.log(counter);
*/
/*
////////////////////////////////////////////
// setTimeout() -> one of the async fn's
function printHello() {
  console.log("Hello World");
}
// after 3 seconds this will run
setTimeout(printHello, 3000);
// First
let ans = 0;
for (let i = 0; i < 1000; i++) {
  ans += i;
}
console.log(ans);
*/
/*
///////////////////////////////////
// setInteval() -> one of the async fn's
// Its run the on every given interval
let counter = 1;

function printToScreen() {
  console.clear();
  console.log(counter);
  counter += 1;
}

setInterval(printToScreen, 1000);

let c2 = 1;
for (let i = 0; i < 10000; i++) {
  c2 += i;
}
console.log(c2);
*/

// Promises
// function medicine() {
//   let p = new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   });
//   return p;
// }

// let value = medicine();
// console.log(value);

// value.then(() => {
//   console.log("Medicine Received");
// });

// Another example
// function game() {
//   console.log("Game Started");
//   return new Promise(function (resolve) {
//     setTimeout(resolve, 2000);
//   });
// }

// let ans = game();
// ans.then(() => {
//   console.log("Game Finished");
// });

// Read from a file using promises
function fileReading() {
  console.log("Inside Function");
  return new Promise((resolve) => {
    console.log("Inside Promsie");
    fs.readFile("./a.txt", "utf-8", (err, data) => {
      console.log("Before Resolve");
      if (err) {
        return err;
      }
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
  console.log("After Resolve");
}

fileReading().then(onDone);
