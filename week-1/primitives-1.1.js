/*
var name = "Pavan Varma";
var age = 24;

// better ways to write arrays
const users = ["pavan", "yeswanth", "sai"];
console.log(users);

// worst way to write arrays
const user1 = "pavan";
const user2 = "sai";

// objects
const user = {
  name: "Pavan",
  age: 24,
  email: "pavanvarma058@gmail.com",
  phone: 1234567890,
};

console.log(user.email);
console.log(user);
*/
/*
// Loops
let users = ["harry", "zayn", "louis"];
// console.log(users[0]);
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
console.log();
let n = 0;
while (n <= users.length - 1) {
  console.log(users[n]);
  n++;
}
*/
/*
////////////////////////////
// Functions
function sumAll(startIndex, endIndex) {
  let sum = 0;
  for (let i = startIndex; i <= endIndex; i++) {
    sum += i;
  }
  return sum;
}

const sum = sumAll(1, 100);
console.log(sum);
*/
/*
////////////////////////////
// callback functions
function sum(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function doArithmetic(firstEl, secondEl, arithmeticFn) {
  let ans = arithmeticFn(firstEl, secondEl);
  return ans;
}

console.log(doArithmetic(25, 28, sum));
console.log(doArithmetic(25, 2, multiply));
*/
///////////////////////////
/*
// creater pattern
function createPattern(numberOfRows) {
  for (let i = 0; i < numberOfRows; i++) {
    let startingPoint = "";
    for (let j = 0; j < i + 1; j++) {
      startingPoint += "*";
    }
    console.log(startingPoint);
  }
}
createPattern(2);

function starLine(n) {
  let ans = "";
  for (let i = 0; i < n; i++) {
    ans += "**";
  }
  console.log(ans);
}

function starryPattern(n) {
  for (let i = 0; i <= n; i++) {
    starLine(i);
  }
}

starryPattern(10);
*/

// Async
const fs = require("fs");

function sum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  console.log(ans);
}

function fileToRead(err, fileContent) {
  sum(fileContent);
  console.log("file is readed and given the final answer");
}

fs.readFile("./choclate.txt", "utf-8", fileToRead);

console.log("Hello");

sum(20);
sum(10);
