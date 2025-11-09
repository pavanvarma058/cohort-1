const arr = [1, 2, 3, 5, 6, 2];

function doubleArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
}
console.log(doubleArr(arr));

const array = [1, 2, 3, 5, 6, 2];

let arr2 = array.map((value) => {
  return value * 2;
});
console.log(arr2);
