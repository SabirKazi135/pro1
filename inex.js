function wakeUp() {
  return new Promise((resolve, reject) => {
    let wakeUpIsTrue = true;
    if (wakeUpIsTrue) {
      setTimeout(() => {
        resolve("You wake up!");
      }, 1000);
    } else {
      reject("did not wake up");
    }
  });
}

function brushTeeth() {
  return new Promise((resolve, reject) => {
    let isBrushTeeth = true;
    if (isBrushTeeth) {
      setTimeout(() => {
        resolve("You brushed your teeth");
      }, 2000);
    } else {
      reject("did not brush");
    }
  });
}

function makeBrakeFast() {
  return new Promise((resolve, reject) => {
    let isMakeBrakeFast = true;
    if (isMakeBrakeFast) {
      setTimeout(() => {
        resolve("You made breakfast");
      }, 3000);
    } else {
      reject("did not made breakfast");
    }
  });
}

async function wakeupFun() {
  try {
    let msg = await wakeUp();
    console.log(msg);
    let msg2 = await brushTeeth();
    console.log(msg2);
    let msg3 = await brushTeeth();
    console.log(msg3);
  } catch (error) {
    console.error(error);
  }
}

wakeupFun();
