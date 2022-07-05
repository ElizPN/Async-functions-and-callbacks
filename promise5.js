const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Noooo");
  }, 5000);
});

promise.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
