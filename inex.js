let order = (call_production) => {
  console.log("Order placed, please call production");
  call_production();
};
let production = () => {
  console.log("Order received, starting production");
};

order(production);
