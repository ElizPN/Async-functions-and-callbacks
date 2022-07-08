function job() {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "Error");
  });
}

async function test() {
  try {
    let message = await job();
    console.log(message);
    return "Succsess";
  } catch (error) {
    console.log(error);
    return "Error happened during test";
  }
}

test().then((message) => {
  console.log(message);
});
