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

//#region --------Lesson 131 Functions accepting callback functions----------

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//#endregion
