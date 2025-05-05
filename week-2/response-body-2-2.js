// Resonse body
// 3 types - HTML, JSON, Body
// JSON example -> in this we send output as JS objects
/*
const express = require("express");
let bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function calculateSum(counter) {
  let sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function calculateMul(counter) {
  let answer = 1;
  for (let i = 1; i <= counter; i++) {
    answer *= i;
  }
  return answer;
}

function handleFirstRequest(req, res) {
  let counter = req.body.counter;

  let calculatedSum = calculateSum(counter);
  let calculatedMul = calculateMul(counter);

  var answerObject = {
    sum: calculatedSum,
    mul: calculatedMul,
  };
  res.status(200).send(answerObject);
}

app.post("/handleSum", handleFirstRequest);

app.get("/", (req, res) => {
  res.send("Go to /handleSum to see the sum");
});

app.listen(port, () => {
  console.log(`Example app listening on Port ${port}`);
});
*/
/*
//////////////////
// HTML example
const express = require("express");
let bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function givePage(req, res) {
  res.send(`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Hello from page</title>
        </head>
        <body>
            <b>Hi there</b>
        </body>
    </html>
`);
}

app.get("/", givePage);

app.listen(port, () => {
  console.log(`Example app listening on Port ${port}`);
});
*/
////////////////////////////////
// RAW Text example
/*
const express = require("express");
let bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function rawText(req, res) {
  res.send("Hi there how are you?");
}

app.get("/", rawText);

app.listen(port, () => {
  console.log(`Example app listening on Port ${port}`);
});
*/
///////////////////////////////////s
// Send html file directly
const express = require("express");
let bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function htmlFile(req, res) {
  res.sendFile(__dirname + "/index.html");
}

app.get("/", htmlFile);

app.listen(port, () => {
  console.log(`Example app listening on Port ${port}`);
});
