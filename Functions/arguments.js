// multiple arguments

let add = function (a, b) {
  return a + b;
};

let result = add(40, 10);
console.log(result);

// default arguments

let getScoreText = function (name = "Vamsi", score = 0) {
  return `name: ${name} - score: ${score}`;

  //return "Name:" + name, "-score:" + score;
};
let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// challenge area

//let total = 40;
//let tip = 0.25;
let getTip = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A  ${percent}% tip on ${total}  would be ${tip}`;
};

let tip = getTip(40);
console.log(tip);

//let name = "Vamsi";
//let age = "31";
//console.log(`Hey, This is ${name} and my ${age} old years.`);
