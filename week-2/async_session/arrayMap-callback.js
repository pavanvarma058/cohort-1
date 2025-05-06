// Array Map with callback:
// Implement a fn 'mapArray' that takes an array and a callback fn as arguments.
// 'mapArray' should apply the callback fn to each element of the array and
// return a new array with the modified values
function mapArray(arr, callback) {
  let newArr = callback(arr);
  return newArr;
}

function modifyArr(arr) {
  return arr.map((element) => element * 2);
}

let arr = [1, 2, 3, 4, 5];
let ans = mapArray(arr, modifyArr);
console.log(ans);
