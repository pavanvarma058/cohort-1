const express = require("express");
let bodyParser = require("body-parser");
const app = express();
const port = 3000;

// app.use(middleware1);
app.use(bodyParser.json());

function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  //   console.log(req.body);
  let counter = req.body.counter;
  const answer = calculateSum(counter);
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
