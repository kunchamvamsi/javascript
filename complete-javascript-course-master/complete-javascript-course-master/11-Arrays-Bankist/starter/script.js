// 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function (movements) {
//   containerMovements.innerHTML = '';
//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     const html = `<div class="movements__row">
//           <div class="movements__type movements__type--${type}">${
//       i + 1
//     }${type}</div>
//           <div class="movements__date">3 days ago</div>
//           <div class="movements__value">${mov}</div>
//         </div>`;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };
// displayMovements(account1.movements);

// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${balance}rupees`;
// };
// calcDisplayBalance(account1.movements);

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsernames(accounts);
// console.log(accounts);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// //const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// //slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// //splice

// console.log(arr.splice(2));
// console.log(arr.splice(-1));

// // reverse

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// // concat

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // Join

// console.log(letters.join('-'));

// // at method

// const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(0));
// console.log(arr3[arr.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement${i + 1}: You desposited ${movement}`);
//   } else {
//     console.log(`Movement${i + 1}: you withdrew ${Math.abs(movement)}`);
//   }
// }
// // forEach

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You desposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdrew ${Math.abs(mov)}`);
//   }
// });

// // forEach method map and set
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });

// // set

// const currenciesUnique = new Set(['USD', 'EURO', 'EURO', 'GBP', 'GBP', 'USD']);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });

// // code
// /*
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.splice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const eurToUsd = 1.1;

// // const movementsUsd = movements.map(function (mov) {
// // return mov * eurToUsd;
// // });

// const movementsUsd = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUsd);

// const movementsUsdfor = [];
// for (const mov of movements) movementsUsdfor.push(mov * eurToUsd);
// console.log(movementsUsdfor);

// const movementsDescription = movements.map(
//   (mov, i, arr) =>
//     `Movements ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
//       mov
//     )}`

//   // {
//   // if (mov > 0) {
//   //   return `Movements ${i + 1}: You deposited ${mov}`;
//   // } else {
//   //   return `Movements ${i + 1}: You withdrawel ${Math.abs(mov)}`;
//   // }
// );
// console.log(movementsDescription);

// // const createUsernames = function (user) {
// //   const username = user
// //     .toLowerCase()
// //     .split(' ')
// //     .map(name => name[0])
// //     .join('');
// //   return username;
// // };
// // console.log(createUsernames('Steven Thomas Williams'));
// // console.log(createUsernames('Vamsi Kuncham'));
// // console.log(createUsernames('Diwakar Babu'));

// // Filtered Methods

// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const withdraw = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withdraw);

// // reduce method
// console.log(movements);
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`iteration${i}:${acc}`);
// //   return acc + cur;
// // }, 0);
// // console.log(balance);

// const balance1 = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance1);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// //// Coding Challenge #2

// /*
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to
// human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and
// does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old,
// humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs
// that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other
// challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀

// */
// /*
// //  function
// function logger() {
//   console.log(`My name is vamsi`);
// }
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(6, 4);
// console.log(appleOrangeJuice);

// // function declaration

// function calcAge1(birthYeah) {
//   return 2024 - birthYeah;
// }
// const age1 = calcAge1(1992);
// console.log(age1);

// // function expression
// const calcAge2 = function (birthYeah) {
//   return 2024 - birthYeah;
// };
// const age2 = calcAge2(1992);
// console.log(age1, age2);

// // function declaration

// function calcAge3(birthYeah) {
//   const age = 2024 - birthYeah;
//   return age;
// }
// const age3 = calcAge3(2000);
// console.log(age3);

// // function expression

// const calcAge4 = function calcAge4(birthYeah) {
//   return 2024 - birthYeah;
// };
// console.log(calcAge4(1999));

// */
// /*
// // function calling other function

// const cutPieces = function (fruit) {
//   return fruit * 6;
// };

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);
//   const juice = `A juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// };
// console.log(fruitProcessor(5, 6));
// */
// // Reviewing Function

// const calcAge1 = function (birthYeah) {
//   return 2024 - birthYeah;
// };
// const yearsUntilRetirment = function (birthYeah, firstName) {
//   const age = 2024 - birthYeah;
//   const retirment = 65 - age;
//   if (retirment > 0) {
//     console.log(`${firstName} retires in ${retirment} years`);
//     return retirment;
//   } else {
//     return -1;
//     console.log(`${firstName} has already retired`);
//   }
// };
// console.log(yearsUntilRetirment(1992, 'vamsi'));
// console.log(yearsUntilRetirment(2000, 'vasanthi'));

// Arrays
//const friends = ['Kittu', 'Ajay', 'Vamsi', 'Vijay'];
// console.log(friends);
// console.log(friends[1]);
// console.log(friends[friends.length - 1]);

// Excercise
/*
const calcAge = function (birthYeah) {
  return 2024 - birthYeah;
};

const years = [1992, 2020, 2003, 2009, 2010];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
// Array methods

// add elements

const friends = ['Kittu', 'Ajay', 'Vamsi', 'Vijay'];
const popped = friends.push('krishna');
console.log(popped);
*/
/*
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
console.log(friends);
friends.unshift('Peter');
console.log(friends);

friends.pop();
console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

// objects

const jonas = {
  firstName: 'Vamsi',
  lastName: 'Kuncham',
  age: 2024 - 1992,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['job']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Jonas? choose between firstName,lastName,age,job and friends'
);
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    'Wrong request! choose between firstName,lastName,age,job,and friends'
  );
}
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
// challenge

//'Jonas has 3 friends , and has best friends is called Michael"

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and has best friends is called ${jonas.friends[0]}`
);
*/
// object method

const jonas = {
  firstName : 'Jonas',
  lastName : 'Schmedtmann',
  bithYeah : 1992,
  job:'teacher',
  friends: ['Micheal','Peter','Steven'],
  hadDriverLicense : true
 calcAge : function(birthYeah){
  return 2024-birthYeah
 }

}
console.log(jonas.calcAge());
// 