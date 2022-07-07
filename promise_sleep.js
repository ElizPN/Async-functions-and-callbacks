const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

sleep(5000).then(() => {
  console.log("Run after 5 seconds");
});

sleep(10000).then(() => {
  console.log("Run after 10 seconds");
});
