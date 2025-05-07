const fs = require("fs");

function removeExtraSpaces(str) {
  let newStr = str.replace(/\s+/g, " ");
  console.log(newStr);
  return newStr;
}

function series() {
  fs.readFile("a.txt", "utf-8", waitCallback);
}

function waitCallback(err, data) {
  function writeCallback() {
    fs.writeFile("b.txt", data, "utf-8", removeSpace);
  }

  function removeSpace(err) {
    let newData = removeExtraSpaces(data);

    fs.writeFile("a.txt", newData, "utf-8", deleteA);
  }

  setTimeout(writeCallback, 3000);
}

function deleteA(err) {
  fs.writeFile("a.txt", "", "utf-8", deleteB);
}

function deleteB(err) {
  fs.writeFile("b.txt", "", "utf-8", finalCallback);
}

function finalCallback() {
  console.log("Success");
}

series();
