let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (call_production) => {
  console.log("Order placed, please call production");
  call_production();
};
let production = () => {
  console.log("Order received, starting production");
};

order(production);
