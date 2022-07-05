var promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Helloy world"), 5000);
});

promise.then((data) => console.log(data + " 1"));
