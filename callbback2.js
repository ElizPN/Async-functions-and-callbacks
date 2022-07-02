const arrayString = ["hello", "goodbuy"];

function everyString(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}

const flipString = everyString(arrayString, function (str) {
  return str.split("").reverse().join("");
});

console.log(flipString);
