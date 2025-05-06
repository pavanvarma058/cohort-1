// Synchronous Callback:
// Write a fn 'higherOrder' that takes a callback fn as an argument.
// Inside the fn, call the callback fn synchronously.

function higherOrder(fnToCall) {
  fnToCall();
}

function greeting() {
  console.log("Hello World");
}

higherOrder(greeting);
