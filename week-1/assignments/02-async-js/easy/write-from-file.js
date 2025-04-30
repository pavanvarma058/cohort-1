/*
Using the fs library again, try to write to the contents of a file. 
You can use the fs library to as a black box, the goal is to understand async tasks.
*/
const fs = require("fs");

let content = "Hello I'm good what about you?";

fs.writeFile("./a.txt", content, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("File has been written");
});
