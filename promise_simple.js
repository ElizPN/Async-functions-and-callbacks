function job() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello world"), 2000);
  });
}

job().then((value) => console.log(value));
