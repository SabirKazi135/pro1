function wakeUp() {
  return new Promise((resolve, reject) => {
    let wakeUpIsTrue = Math.random() < 0.5;
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
    let isBrushTeeth = Math.random() < 0.5;
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
    let isMakeBrakeFast = Math.random() < 0.5;
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
  let msg = await wakeUp().catch((err) => {
    return "Skipping wake up";
  });
  console.log(msg);
  let msg2 = await brushTeeth().catch((err) => {
    return "Skipping brushing";
  });
  console.log(msg2);
  let msg3 = await makeBrakeFast().catch((err) => {
    return "skipping breakfast";
  });
  console.log(msg3);
  // ✅ Will still log all results (successful or failed)
}

wakeupFun();
