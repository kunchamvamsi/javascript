let myBook = {
  title: "Steping Stones",
  author: "Sai Vardhan",
  pages: "550",
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Pandiri";
myBook.author = "Narayanappadu";

console.log(`${myBook.title} by ${myBook.author}`);

// Code

let personDetails = {
  name: "Sai Vardhan",
  age: 26,
  location: "Hyderabad",
};

console.log(
  `${personDetails.name} was a ${personDetails.age} old and lives is ${personDetails.location}`
);

personDetails.age = personDetails.age + 1;

console.log(
  `${personDetails.name} was a ${personDetails.age} old and lives is ${personDetails.location}`
);
