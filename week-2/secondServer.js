// One node.js processor can call the Https req and gets the output as json
// to do that we have to use fetch
// we can write java or python to hit our express https processor
function logResponseBody(jsonBody) {
  console.log(jsonBody);
}

function callbackFn(result) {
  result.json().then(logResponseBody);
}

let sendObj = {
  method: "GET",
};

fetch("http://localhost:3000/handleSum?counter=100", sendObj).then(callbackFn);
