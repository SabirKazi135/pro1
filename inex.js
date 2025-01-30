function task1(callback) {
  setTimeout(() => {
    console.log("Tast 1 Complete");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Tast 2 Complete");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Tast 3 Complete");
    callback();
  }, 3000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("Tast 4 Complete");
    callback();
  }, 1500);
}

task1(() => {
  task2(() => {
    task3(() => {
        task4(() => {
          task5(()=> console.log("All tasks complete");)
      });
    });
  });
});
