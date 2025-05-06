// Array Filter with callback:
// Implement a fn 'filterArray' that takes an array and a callback fn as arguments.
// 'filterArray' should filter the elements of the array based on on the condition specified by the
//  callback fn and return a new array with the filtered elements
function filterArray(arr, callback) {
  return callback(arr);
}

function conditionArr(arr) {
  return arr.filter((element) => element.length >= 6);
}

let arr = ["Pavan", "Yeswanth", "Varma", "JavaScript", "Express"];
let ans = filterArray(arr, conditionArr);
console.log(ans);
