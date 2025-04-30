/*
Without using setInterval, try to code a counter in Javascript. 
There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout)
*/

let counter = 1;

function increaseCount() {
  console.clear(counter);
  console.log(counter);
  counter += 1;
  setTimeout(increaseCount, 1 * 1000);
}

setTimeout(increaseCount, 1000);
