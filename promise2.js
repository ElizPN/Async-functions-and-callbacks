const passexam = false;

const result = new Promise((resolve, reject) => {
  setTimeout(() => {
    passexam ? resolve("Father gave me 100$") : reject(" I have not get money");
  }, 5000);
});

result
  .then((value) => {
    console.log(result); // Promise object
    console.log(value); //value
  })
  .catch((value) => {
    console.log(result);
    console.log(value);
  });
