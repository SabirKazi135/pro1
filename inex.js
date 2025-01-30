function walkDog() {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      console.log("You walk the Dog");
    }, 1500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("You clean the kitchen");
    });
  }, 500);
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Take out the trash");
    });
  }, 2500);
}

walkDog(() => {
  cleanKitchen(() => {
    takeOutTrash(() => {
      console.log("You finish all tasks");
    });
  });
});
