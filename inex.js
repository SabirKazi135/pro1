function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = false; // Change to false to test rejection
      if (dogWalked) {
        resolve("You walk the Dog");
      } else {
        reject("You did not walk the dog");
      }
    }, 1500); // ✅ Waits 1.5 seconds
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true; // Change to false to test rejection
      if (kitchenCleaned) {
        resolve("You clean the kitchen");
      } else {
        reject("You did not clean the kitchen");
      }
    }, 500); // ✅ Waits 0.5 seconds
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true; // Change to false to test rejection
      if (trashTakenOut) {
        resolve("Take out the trash");
      } else {
        reject("You did not take out the trash");
      }
    }, 5000); // ✅ Waits 10 seconds
  });
}

// Running the tasks in order with error handling
// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen(); // ✅ Waits before moving to the next task
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash(); // ✅ Waits 10 seconds before continuing
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("You Finished all the chores"); // ✅ Runs after all tasks are done
//   })
//   .catch((error) => {
//     console.log("Error:", error); // ❌ Handles any rejection from the promises
//   });

async function deChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    const cleanKitchenResut = await cleanKitchen();
    console.log(cleanKitchenResut);
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    setTimeout(() => {
      console.log("You complete");
    }, 4000);
  } catch (error) {
    console.error(error);
  }
}

deChores();
