// undefined for variable

let name;

name = "Vamsi";

if (name === undefined) {
  console.log("Please provide a name ");
} else {
  console.log(name);
}

// undefined for function arguments
// undefined as function return default value

let square = function (num) {
  console.log(num);
};

let result = square();
console.log(result);

// null asigned as value
let age = 27;

age = null;

console.log(null);
