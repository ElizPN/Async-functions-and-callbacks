function job(data) {
  return new Promise((resolve, reject) => {
    if (isNaN(data)) {
      reject((data = "error"));
    }
    setTimeout(() => {
      if (data % 2 === 1) {
        resolve((data = "odd"));
      }
    }, 1000);

    setTimeout(() => {
      if (data % 2 === 0) {
        reject((data = "even"));
      }
    }, 2000);
  });
}

job("iio").catch((error) => console.log(error));
job(1).then((value) => console.log(value));
job(2).catch((error) => console.log(error));
