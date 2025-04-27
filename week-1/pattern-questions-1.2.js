function printPartialSingleRow(num) {
  let myStr = "";
  myStr += "*";
  for (let i = 0; i < num - 2; i++) {
    myStr += " ";
  }
  myStr += "*";
  console.log(myStr);
}

function printSingleFullRow(num) {
  let myStr = "";
  for (let i = 0; i < num; i++) {
    myStr += "*";
  }
  console.log(myStr);
}

function printWholeThing(n) {
  printSingleFullRow(n);
  for (let i = 0; i < n - 2; i++) {
    printPartialSingleRow(n);
  }
  printSingleFullRow(n);
}
printWholeThing(5);
