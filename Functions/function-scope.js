// Global Scope(convertFahrenheitToCelsius,tempOne,tempTwo)
// Local Scope(fahrenheit,celsius)

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(57);
console.log(tempOne);
console.log(tempTwo);
