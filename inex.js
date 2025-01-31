function one(call_two) {
  console.log("step 1 complete. pese call step 2");
}
function two() {
  console.log("step 2");
}

two();
one();
