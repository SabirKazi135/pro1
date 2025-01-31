let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function order(time, work) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject("Our shop is closed");
    }
  });
}

async function iceCreamProcess() {
  try {
    await order(2000, () => {
      console.log(`${stocks.Fruits[0]} was selected`);
    });
    await order(0, () => console.log("Production has started"));
    await order(2000, () => console.log("The fruit was chopped"));
    await order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)
    );
    await order(2000, () => console.log("The machine has started"));
    await order(2000, () =>
      console.log(`Ice cream was placed on ${stocks.holder[0]}`)
    );
    await order(3000, () =>
      console.log(`${stocks.toppings[0]} was added as toppings`)
    );
    await order(2000, () => console.log("Serve the ice cream"));
  } catch (error) {
    console.log("Customer left");
  }
}

iceCreamProcess();
