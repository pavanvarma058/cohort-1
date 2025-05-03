/*
// Request Methods
// Get, Post, Put, Delete
const express = require("express");
const app = express();
const port = 3000;

function handleFirstRequest(req, res) {
  // Header method
  console.log(req.headers);
  let counter = req.headers.counter;
  const answer = calculateSum(counter);
  console.log(answer);
  res.send("the sum is " + answer);
}

// app.get("/handleSum", handleFirstRequest);
app.post("/handleSum", handleFirstRequest);

app.get("/", (req, res) => {
  res.send("Go to /handleSum to see the sum");
});

createUser = (req, res) => {
  res.send("Hello World");
};

// app.post("/createUser", createUser);

app.listen(port, () => {
  console.log(`Example app listening on Port ${port}`);
});

function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}
*/
///////////////////////////////////
/*
// Middlewares
const express = require("express");
const app = express();
const port = 3000;

function middleware1(req, res, next) {
  console.log("From inside middleware " + req.headers.counter);
  // if authentication happens we use next(), otherwise we can send error message
  // res.send("Error from inside Middleware");
  next();
}

app.use(middleware1);

function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  console.log(req.headers);
  let counter = req.headers.counter;
  const answer = calculateSum(counter);
  console.log(answer);
  res.send("the sum is " + answer);
}

// app.get("/handleSum", handleFirstRequest);
app.post("/handleSum", handleFirstRequest);

app.get("/", (req, res) => {
  res.send("Go to /handleSum to see the sum");
});

app.listen(port, () => {
  console.log(`Example app listening on Port ${port}`);
});
*/
/////////////////////////////////////
// building a middleware fn to calculate the number of requests
const express = require("express");
const app = express();
const port = 3000;
let numOfRequests = 0;

function middleware1(req, res, next) {
  numOfRequests += 1;
  console.log(numOfRequests);
  next();
}

app.use(middleware1);

function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  console.log(req.headers);
  let counter = req.headers.counter;
  const answer = calculateSum(counter);
  console.log(answer);
  res.send("the sum is " + answer);
}

// app.get("/handleSum", handleFirstRequest);
app.post("/handleSum", handleFirstRequest);

app.get("/", (req, res) => {
  res.send("Go to /handleSum to see the sum");
});

app.listen(port, () => {
  console.log(`Example app listening on Port ${port}`);
});
