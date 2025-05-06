// Asynchronous Callback:
// Write a fn 'higherOrderAsync' that takes a callback fn as an argument.
// Inside 'higherOrderAsync', call the callback fn asynchronously using setTimeout after a delay of n seconds
// where n is current day of the month according to UTC time (1 <= n <= 31).
let n = new Date().getUTCDate();
console.log(n);
function higherOrderAsync(callback) {
  setTimeout(callback, n * 1000);
}

function language() {
  console.log("JavaScript is best..!");
}

higherOrderAsync(language);
