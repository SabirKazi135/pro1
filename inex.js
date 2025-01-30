function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You walk the Dog");
    }, 1500); // ✅ Waits 1.5 seconds
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean the kitchen");
    }, 500); // ✅ Waits 0.5 seconds
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Take out the trash");
    }, 10000); // ✅ Waits 10 seconds
  });
}

// Running the tasks in order
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen(); // ✅ Waits before moving to the next task
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash(); // ✅ Waits 10 seconds before continuing
  })
  .then((value) => {
    console.log(value);
    console.log("You Finished all the chores"); // ✅ Runs after all tasks are done
  });
