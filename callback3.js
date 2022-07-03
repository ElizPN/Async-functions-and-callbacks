const arrNumbers = [1, 3, 5, 6];

function cube(num) {
  return num * num * num;
}

function each(arr, callback) {
  let result = [];
  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}
const newResult = each(arrNumbers, cube);
console.log(newResult);
