// Request Methods
// Get, Post, Put, Delete
const express = require("express");
const app = express();
const port = 3000;

function handleFirstRequest(req, res) {
  const answer = calculateSum(100);
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
  for (let i = 0; i < counter; i++) {
    sum += i;
  }
  return sum;
}
