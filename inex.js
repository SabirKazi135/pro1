function orderFood() {
  let isOpen = Math.random() * 0.8;
  new Promise((resolve, reject) => {
    if (isOpen) {
      setTimeout(() => {
        resolve("Food ordered!");
      }, 2);
    } else {
      reject("Retaurant is Closed");
    }
  });
}

function prepareFood() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Food prepared!");
    }, 5);
  });
}
