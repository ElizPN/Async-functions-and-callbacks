const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const mark = Math.floor(Math.random() * 4) + 2;
    if (mark > 3) {
      resolve(mark);
    }
    reject(mark);
  }, 5000);
});

promise
  .then((result) => console.log(`I have passed test for ${result}! I got 100$`))
  .catch((result) =>
    console.log(
      `I have NOT passed test, and got mark ${result}! I did not get money`
    )
  );
