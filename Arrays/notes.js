const notes = [
  {
    title: "My New trip",
    body: "I Would like to go to spain",
  },
  {
    title: "Habbits to work on",
    body: "Excercise.Eatting a bite",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

// //console.log(notes.pop());
// //notes.push("My new notes");

// //console.log(notes.shift());
// //notes.unshift("My first notes");

// //notes.splice(1, 1, "This is now the new note item");

// notes[2] = "This is now the new note 3";

// notes.forEach(function (item, index) {
//   console.log(index);
//   console.log(item);
// });
// console.log(notes.length);

// console.log(notes);

// // Counting...1

// // Forward
// for (let count = 0; count <= 2; count++) {
//   console.log(count);
// }
// // Reverse order

// for (let count = 2; count >= 0; count--) {
//   console.log(count);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(notes[count]);
// }

// console.log(notes.indexOf("notes-3"));

// console.log(notes.length);
// console.log(notes);

// let someObjects = {};
// let otherObjects = someObjects;
// console.log(someObjects === otherObjects);

// const index = notes.findIndex(function (note, index) {
//   console.log(note);
//   return note.title === "Habbits to work on";
// });
// console.log(index);

const findNote = function (notes, notesTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === notesTitle.toLowerCase();
  });
};

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(notes, "office"));

// const findNote = function (notes, notesTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === notesTitle.toLowerCase();
//   });
//   return notes[index];
// };

const note = findNote(notes, "Office modification");
console.log(note);
