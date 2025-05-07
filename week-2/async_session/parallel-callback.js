// Parallel Execution with Callbacks:
// Implement a function 'parallelFileOperation' that returns an array of size 2 with the first index containing the
// contents of the file 'b.txt' in utf-8 encoding. If 'a.txt' doesn't exist, then throw an error.
// The second element of the array contains 1 if the text 'Hello!' is successfully written to the file
// 'c.txt' and 0 if the operation fails

const fs = require("fs");

function parallelFileOperation() {
  let ans = [];
  let count = 0;
  function readCallback(err, data) {
    if (err) {
      console.error(err);
      return;
    }
    ans[0] = data;
    count++;
    if (count === 2) {
      console.log(ans);
    }
  }

  function writeCallback(err) {
    if (err) {
      ans[1] = 0;
    } else {
      ans[1] = 1;
    }
    count++;
    if (count === 2) {
      console.log(ans);
    }
  }

  fs.readFile("b.txt", "utf-8", readCallback);

  fs.writeFile("c.txt", "Hello!", "utf-8", writeCallback);
}
parallelFileOperation();
