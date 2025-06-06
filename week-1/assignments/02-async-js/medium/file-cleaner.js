/*
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

hello     world    my    name   is       raman

After the program runs, the output should be

hello world my name is raman
*/
const fs = require("fs");

function clean(data) {
  let arr = data.split(" ");
  let answerArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
    } else {
      answerArray.push(arr[i]);
    }
  }
  let ansString = answerArray.join(" ");
  return ansString;
}

function fileWritten(err) {
  console.log("Done");
}

function fileRead(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  let cleanedData = clean(data);
  fs.writeFile("./b.txt", cleanedData, fileWritten);
}

fs.readFile("./b.txt", "utf-8", fileRead);
