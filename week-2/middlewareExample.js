const express = require("express");
const app = express();
const port = 3000;

function middleware1(req, res, next) {
  console.log("From inside middleware: " + req.headers.a);
  console.log("From inside middleware: " + req.headers.b);
  next();
}
/*
Middlewares refers to functions that process requests before reaching the route handlers.
These functions can modify the request and response objects, end the reques-respsone cycle, (or) call
the next middleware function.
*/
app.use(middleware1);

function calculateMul(a, b) {
  let ans = a * b;
  return ans;
}

function handleRequest(req, res) {
  console.log(req.headers);
  // Headers
  let a = req.headers.a;
  let b = req.headers.b;
  let answer = calculateMul(a, b);
  res.send("The mulitplication of " + a + " and " + b + " is " + answer);
}

app.post("/handleMultiply", handleRequest);

app.get("/", (req, res) => {
  res.send("Go to multiply route to do mulitplication");
});

app.listen(port, () => {
  console.log(`Example app listening on Port: ${port}`);
});
