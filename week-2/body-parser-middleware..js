const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function handleRequest(req, res) {
  res.send("Hi how are you?");
}

app.get("/", handleRequest);

app.listen(port, () => {
  console.log(`Example app listening on Port:${port}`);
});
