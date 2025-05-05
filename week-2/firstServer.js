const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  let counter = req.query.counter;
  let calculatedSum = calculateSum(counter);
  let answerObject = {
    sum: calculatedSum,
  };
  res.send(answerObject);
}

app.get("/handleSum", handleFirstRequest);

app.listen(port, () => {
  console.log(`Example app listening on Port:${port}`);
});
