/*
//const p = document.querySelector("p");
//p.remove();

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function (paragraph) {
  if (paragraph.textContent.includes("the")) {
    paragraph.remove();
  }
});
*/

const todos = [
  {
    text: "Order Cat Food",
    completed: true,
  },
  {
    text: "Clean The Kitchen",
    completed: false,
  },
  {
    text: "By The Food",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Excercise",
    completed: true,
  },
];
const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed;
});

const summary = document.createElement("h2");
summary.textContent = `you have ${incompleteTodos.length} todos left`;
document.querySelector("body").appendChild(summary);

todos.forEach(function (todo) {
  const p = document.createElement("p");
  p.textContent = todo.textContent;
  document.querySelector("body").appendChild(p);
});

// add Evenlistioner

document.querySelector("button").addEventListener("click", function (e) {
  console.log("Add a new note....");
});
document.querySelector("#search-text").addEventListener("input", function (e) {
  console.log(e.target.value);
});
