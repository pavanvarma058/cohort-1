/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
}

async function calculateTime() {
  const start = Date.now();

  await waitOneSecond();
  await waitTwoSecond();
  await waitThreeSecond();

  const end = Date.now();

  console.log(`Sequential Execution took ${(end - start) / 1000}seconds`);
}

calculateTime();
