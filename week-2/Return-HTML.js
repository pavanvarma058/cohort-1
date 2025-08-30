const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());

// Just a example to practice how we can send HTML file as output

function getPage(req, res) {
  res.send(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hello from page</title>
            </head>
            <body>
                <b>Hi there</b>
            </body>
        </html>
`);
}

function givePage(req, res) {
  res.sendFile(__dirname + "/index.html");
}

// app.get("/", getPage);

app.get("/html", givePage);

app.listen(port, () => {
  console.log(`Example app listening on Port:${port}`);
});
