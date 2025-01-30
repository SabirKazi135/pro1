function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You walk the Dog");
    }, 1500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean the kitchen");
    });
  }, 500);
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Take out the trash");
    });
  }, 10000);
}

// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => {
//       console.log("You finish all tasks");
//     });
//   });
// });

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You Finished all the chores");
  });
