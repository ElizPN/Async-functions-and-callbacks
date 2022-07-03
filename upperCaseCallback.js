const arrayString = ["hello", "goodbuy"];

function each(arr, callback) {
  let result = [];
  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}

const UpperCase = each(arrayString, function (str) {
  const newString = str.charAt(0).toUpperCase() + str.slice(1);
  return newString;
});
console.log(UpperCase);
