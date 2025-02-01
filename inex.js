// Create an async function
async function getTheAnswer() {
  return 42;
}

// Assign the return to a variable
let answer = getTheAnswer();
console.log(answer);

// Use Promise.then() to get the actual value
answer.then(function (data) {
  console.log(data);
});
