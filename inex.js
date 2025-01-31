let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = false;

function order(time, work) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
}

order(2000, () => {
  console.log(`${stocks.Fruits[0]} was selected`);
})
  .then(() => order(0, () => console.log("Production has started")))
  .then(() => order(2000, () => console.log("The fruit was chopped")))
  .then(() =>
    order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)
    )
  )
  .then(() => order(2000, () => console.log("The machine has started")))
  .then(() =>
    order(2000, () =>
      console.log(`Ice cream was placed on ${stocks.holder[0]}`)
    )
  )
  .then(() =>
    order(3000, () =>
      console.log(`${stocks.toppings[0]} was added as toppings`)
    )
  )
  .then(() => order(2000, () => console.log("Serve the ice cream")))
  .catch(() => console.log("Customer left"));
