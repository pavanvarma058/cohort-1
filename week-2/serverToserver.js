const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function calculateAdd(counter) {
  let sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function handleRequest(req, res) {
  let counter = req.query.counter;
  let calculateSum = calculateAdd(counter);
  let resultObject = {
    sum: calculateSum,
  };
  res.send(resultObject);
}

app.get("/handleAdd", handleRequest);

app.listen(port, () => {
  console.log(`Example app listening on Port:${port}`);
});
