function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

const result = delay(3000);

console.log(result);

result.then(() => alert("выполнилось через 3 секунды"));
