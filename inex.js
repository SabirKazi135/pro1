function cleanHouse() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Cleaning failed");
    }, 1000);
  });
}

function doLaundry() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Laundry done");
    }, 2000);
  });
}

function cook() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Cooking complete");
    }, 3000);
  });
}

Promise.all([cleanHouse(), doLaundry(), cook()])
  .then((results) => {
    console.log("All tasks completed:", results);
  })
  .catch((error) => {
    console.log("Error:", error); // Cleaning failed
  });
