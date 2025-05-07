// File Processing with Callback:
// Write a function 'readFileCallback' that takes a filename and a callback funtion.
// 'readFileCallback' should read the contents of the file asynchronously and pass the data to the callback fn.
const fs = require("fs");

function readFileCallback(err, data) {
  if (err) {
    console.error("Error");
    return;
  } else {
    console.log(data);
  }
}

fs.readFile("a.txt", "utf-8", readFileCallback);
