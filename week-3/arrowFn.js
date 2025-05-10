const fs = require("fs");

// Normal Function type
function callback(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
}

fs.readFile("a.txt", "utf-8", callback);

// Anonymous Function type
fs.readFile("a.txt", "utf-8", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Arrow Function Type
fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
