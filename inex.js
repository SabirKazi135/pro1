function task1() {
  setTimeout(() => {
    console.log("Tast 1 Complete");
  }, 2000);
}

function task2() {
  setTimeout(() => {
    console.log("Tast 2 Complete");
  }, 1000);
}

function task3() {
  setTimeout(() => {
    console.log("Tast 3 Complete");
  }, 3000);
}

function task4() {
  setTimeout(() => {
    console.log("Tast 4 Complete");
  }, 1500);
}

task1();
task2();
task3();
task4();
console.log("all tasks comple");
