const express = require("express");
const bodyParser = require("body-parser");
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

function handleSecondRequest(req, res) {
  let counter = req.body.counter;
  let calculatedSum = calculateSum(counter);

  let answer = "The Sum is " + calculatedSum;
  res.send(answer);
}

app.post("/handleSum", handleSecondRequest);

app.listen(port, () => {
  console.log(`Example app listening on Port:${port}`);
});
