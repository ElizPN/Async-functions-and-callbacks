const array = [2, 4, 6, 8];

function each(arr, callback) {
  let result = [];
  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}

const result = each(array, function (num) {
  return num * 2;
});
console.log(result);
