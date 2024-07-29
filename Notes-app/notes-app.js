/*

//console.log("This file is from the different document ");

// query and remove
//const p = document.querySelector("p");
//p.remove();

// query and remove all

const ps = document.querySelectorAll("p");
ps.forEach(function (p) {
  p.textContent = "*******";
  //console.log(p.textContent);
  // p.remove();
});

//Add a new element

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new element from the Javascript";
document.querySelector("body").appendChild(newParagraph);
*/

const notes = [
  {
    title: "Order Cat Food",
    body: "I would like to go spain",
  },
  {
    title: "Habbits to work on",
    body: "Excercise,eating a bit better",
  },
  {
    title: "office modification",
    body: "Get a new seat",
  },
];

const filters = {
  searchText: "",
};

// CRUD operations

// const user = {
//   name: "Andrew",
//   age: 27,
// };

// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// console.log(`${user.name} was ${user.age}`);

//console.log(localStorage.getItemItem("location"));

const userJSON = localStorage.getItem("user");
const user = JSON.parse(userJSON);
console.log(`${user.name} is ${user.age}`);

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase.includes(filters.searchText.toLowercase());
  });
  document.querySelector("#notes").innerHTML = "";
  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "this is button clicked";
});
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});

const deposits