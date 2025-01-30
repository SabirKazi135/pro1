function walkDog() {
  setTimeout(() => {
    console.log("You walk the Dog");
    // callback();
  }, 1500);
}
function cleanKitchen() {
  setTimeout(() => {
    console.log("You clean the kitchen");
    // callback();
  }, 500);
}
function takeOutTrash() {
  setTimeout(() => {
    console.log("Take out the trash");
    // callback();
  }, 2500);
}

// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => {
//       console.log("You finish all tasks");
//     });
//   });
// });

walkDog();
cleanKitchen();
takeOutTrash();
