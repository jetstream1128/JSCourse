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

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss AirLines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

//does not work ---------------!!
// book(23, 'Dan Boshik');

lufthansa.book(239, 'Bohdan Alieksieiev');
lufthansa.book(635, 'Jay Jayson');

//call method
book.call(eurowings, 23, 'Dan Boshik');
book.call(lufthansa, 255, 'Alex Dev');

book.call(swiss, 65, 'DimonNN');
book.call(swiss, 256, 'Fedir');

//apply method
const flightData = [679, 'George Cooper'];
book.apply(swiss, flightData);

//ES6 method
book.call(swiss, ...flightData);

//bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(755, 'Jonh Doe');
bookLX(244, 'Some Name');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('God Man');
bookEW23('Super Man');

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
};

console.log(eurowings);
console.log(lufthansa);
console.log(swiss);
//#endregion
