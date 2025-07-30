// A Example https server created using express to showcase how we can get elements
// using Headers
// Below we created 2 variables and we can input as custom headers
// We can't run the custom headers in URL
// But we can run them in Postman
const express = require("express");
const app = express();
const port = 3000;

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
