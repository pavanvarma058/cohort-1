function responseBody(logBody) {
  console.log(logBody);
}

function callback(result) {
  result.json().then(responseBody);
}

let sendObj = {
  method: "GET",
};

fetch("http://localhost:3000/handleAdd?counter=5", sendObj).then(callback);
