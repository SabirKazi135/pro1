let sayHello = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hi, universe");
  }, 5000);
});

sayHello.then((msg) => {
  console.log(msg);
});
