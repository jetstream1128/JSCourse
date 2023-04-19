'use strict';
//#region --------Lesson 128 default parameters----------

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);
//#endregion

//#region --------Lesson 129 how passing arguments works----------
// const flight = 'LH234';
// const jay = {
//   name: 'Bohdan Alieksieiev',
//   passport: 887633,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'DF999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 887633) {
//     alert('Check in');
//   } else alert('Wrong passport');
// };

// checkIn(flight, jay);
// console.log(flight);
// console.log(jay);

//cause issue because same object
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };
// newPassport(jay);
// checkIn(flight, jay);

//#endregion

//#region --------Lesson 131 Functions accepting callback functions----------
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// let i = 0;
// const hight5 = function () {
//   console.log(`👍 ${i++}`);
// };

// document.body.addEventListener('click', hight5);
//#endregion

//#region --------Lesson 132 Functions Returning functions----------

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//Challenge
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Bohdan');
// greeterHey('Jay');

// greet('Hello')('Jay');
//#endregion

//#region --------Lesson 133-134 The call and apply Methods, Bind method----------

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss AirLines',
//   iataCode: 'LX',
//   bookings: [],
// };

// const book = lufthansa.book;

//does not work ---------------!!
// book(23, 'Dan Boshik');

// lufthansa.book(239, 'Bohdan Alieksieiev');
// lufthansa.book(635, 'Jay Jayson');

//call method
// book.call(eurowings, 23, 'Dan Boshik');
// book.call(lufthansa, 255, 'Alex Dev');

// book.call(swiss, 65, 'DimonNN');
// book.call(swiss, 256, 'Fedir');

//apply method
// const flightData = [679, 'George Cooper'];
// book.apply(swiss, flightData);

//ES6 method
// book.call(swiss, ...flightData);

//bind method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(755, 'Jonh Doe');
// bookLX(244, 'Some Name');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('God Man');
// bookEW23('Super Man');

//with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(200));
//#endregion

//#region -------Challenge #1-------
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)*/
/*
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n (Write option number)`,
        0
      )
    );
    // answer <= 3 ? this.answers[answer]++ : this.registerNewAnswer();
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
  },
  displayResults(type = 'array') {
    console.log(
      type === 'string'
        ? `Poll results are ${this.answers.join(', ')}`
        : this.answers
    );
  },
};
*/
/*2. Call this method whenever the user clicks the "Answer poll" button.*/
/*
const newAnswer = poll.registerNewAnswer;
document.querySelector('.poll').addEventListener('click', newAnswer.bind(poll));
*/
/*3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". */

/*4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?*/
/*
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/
/*BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

//#endregion

//#region --------Lesson 136 Immediately Invoked Functions Expressions----------

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// //IIFE
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will ALSO never run again'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// // console.log(isPrivate);
// console.log(notPrivate);
//#endregion

//#region --------Lesson 137-138 Closures----------

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// //Example 1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// // f reassigned by h
// h();
// f();

// //example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 10000;
// boardPassengers(180, 3);

//#endregion

//#region --------Challenge #2----------
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

//#endregion
