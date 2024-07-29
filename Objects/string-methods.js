let name = "Kuncham Vamsi";

// length property
console.log(name.length);

// convert to upper case

console.log(name.toUpperCase());

// convert to lower case

console.log(name.toLowerCase());

// Include password

let password = "abc1234asdf098";

console.log(password.includes("password"));

// trim

console.log(name.trim());

// challange

let isValidPassword = function (password) {
  if (password.lenth > 8 && !password.includes("password")) {
    return true;
  } else {
    return false;
  }
};

console.log(isValidPassword("asdf"));
console.log(isValidPassword("abc123!@#$%^&"));
console.log(isValidPassword("asdfpasdfpojipassword"));
