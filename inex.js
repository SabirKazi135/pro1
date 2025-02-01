let sayHello = new Promise((resolve, reject) => {
  reject("Unable to say hi.");
  setTimeout(() => {
    resolve("hi, universe");
  }, 5000);
});

sayHello
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log(error);
  });
