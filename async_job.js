function job() {
  de;
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 5000, "Hello world 1");
  });
}

async function test() {
  let message = await job(); // I'll go NO further until Promise returned by job() is resolved. Let's wait him.
  console.log(message);

  return "Hello world 2";
}

test().then(function (message) {
  console.log(message);
});

// in a promise style
function test() {
  return job().then(function (message) {
    console.log(message);
    return "Hello world 2";
  });
}

test().then(function (message) {
  console.log(message);
});
