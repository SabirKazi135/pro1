function wakeUp() {
  return new Promise((resolve, reject) => {
    let wakeUpIsTrue = true;
    if (wakeUpIsTrue) {
      setTimeout(() => {
        resolve("wake up after 2 sec");
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
        resolve("wake up after 2 sec");
      }, 1000);
    } else {
      reject("did not wake up");
    }
  });
}

async function wakeupFun() {
  try {
    let msg = await wakeUp();
    console.log(msg);
  } catch (error) {
    console.error(error);
  }
}

wakeupFun();
