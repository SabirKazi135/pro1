let sayHello = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) {
    reject("We reject");
  }
  resolve(42);
});

sayHello
  .then((num) => {
    console.log(num);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(" always run");
  });
