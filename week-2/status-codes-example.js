const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());

// Just a example to practice status codes
function handleRequest(req, res) {
  let counter = req.body.counter;
  if (counter < 1000) {
    let calculatedMul = calculateMul(counter);
    let answer = "Your answer is " + calculatedMul;
    res.send(answer);
  } else {
    res.status(411).send("You have entered a very high value");
  }
}

function calculateMul(counter) {
  let mul = 1;
  for (let i = 1; i <= counter; i++) {
    mul *= i;
  }
  return mul;
}

app.post("/handleMul", handleRequest);

app.listen(port, () => {
  console.log(`Example app listening on Port:${port}`);
});
