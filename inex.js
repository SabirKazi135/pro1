let sayHello = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hi, universe");
  }, 5000);
});
