let myBook = {
  title: "Steping Stones",
  author: "Sai Vardhan",
  pages: "550",
};

let otherBook = {
  title: "Pandiri",
  author: "Appanna",
  pages: "600",
};

let getSummary = function (book) {
  return {
    summary: `A ${book.title} by ${book.author}`,
    pageCountSummary: `A ${book.title} by ${book.pages} long`,
  };
};
//console.log(`A ${book.title} by ${book.author}`);
let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge

let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: ((fahrenheit + 459.67) * 5) / 9,
    celsius: ((fahrenheit - 32) * 5) / 9,
  };
};
let temp = convertFahrenheit(74);
console.log(temp);
