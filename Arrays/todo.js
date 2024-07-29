/*
const todos = [
  "Order Cat Food",
  "Clean The Kitchen",
  "By The Food",
  "Do Work",
  "Excercise",
];

todos.splice(1, 2);
todos.push("Buy Coffee");
todos.shift();
console.log(`You have  ${todos.length} todos!`);
console.log(todos);

todos.forEach(function (todo, index) {
  const num = index + 1;
  console.log(`${num}.${todo}`);
});

for (let count = 0; count < todos.length; count++) {
  const num = count + 1;
  const todo = todos[count];
  console.log(`${num}.${todo}`);
}

*/
// //const todos = [
//   "Order Cat Food",
//   "Clean The Kitchen",
//   "By The Food",
//   "Do Work",
//   "Excercise",
// ];

const todos = [
  {
    title: "Order Cat Food",
    Completed: true,
  },
  {
    title: "Clean The Kitchen",
    Completed: false,
  },
  {
    title: "By The Food",
    Completed: true,
  },
  {
    title: "Do work",
    Completed: false,
  },
  {
    title: "Excercise",
    Completed: true,
  },
];
const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.title.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};
deleteTodo(todos, "!!By food");
console.log(todos);
