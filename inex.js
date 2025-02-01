let sayHello = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
});

sayHello
  .then((num) => {
    console.log(num);
    return num + 1;
  })
  .then((num) => {
    console.log(num);
    return num + 1;
  })
  .then((num) => {
    console.log(num);
    return num + 1;
  })
  .then((num) => {
    console.log(num);
    return num + 1;
  });
