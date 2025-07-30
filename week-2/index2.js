// A Example https server created using express to showcase how we can get elements
// using query parameters
// Below we created 2 variables
const express = require("express");
const app = express();
const port = 3000;

function calculateMul(a, b) {
  let ans = a * b;
  return ans;
}

function handleRequest(req, res) {
  let a = req.query.a;
  let b = req.query.b;
  let answer = calculateMul(a, b);
  res.send("The mulitplication of " + a + " and " + b + " is " + answer);
}

app.get("/multiply", handleRequest);

app.get("/", (req, res) => {
  res.send("Go to multiply route to do mulitplication");
});

app.listen(port, () => {
  console.log(`Example app listening on Port: ${port}`);
});
