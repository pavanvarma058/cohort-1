const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());

// Just a example to practice how we can get JSON object as output
function handleRequest(req, res) {
  let counter = req.body.counter;
  let sum = calculateSum(counter);
  let mul = calMul(counter);
  let answerObj = {
    sumVal: sum,
    calMul: mul,
  };
  res.send(answerObj);
}

function calculateSum(counter) {
  let sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function calMul(counter) {
  let m = 1;
  for (let i = 1; i <= counter; i++) {
    m *= i;
  }
  return m;
}

app.post("/handleSum", handleRequest);

app.listen(port, () => {
  console.log(`Example app listening on Port:${port}`);
});
