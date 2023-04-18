'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing2}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//#region ------- Lection 121-125 Strings 1-4--------
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSit = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You are lucky');
// };

// checkMiddleSit('11B');
// checkMiddleSit('23C');
// checkMiddleSit('3E');

// console.log(new String('Jay'));
// console.log(typeof new String('Jay'));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fixed capitalization in name
// const passenger = 'jAy';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing email
// const email = 'hello@google.com';
// const loginEmail = '    Hello@GOOgle.Com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// //Booleans
// const plane1 = 'Airbus A320neo';
// console.log(plane1.includes('A320'));
// console.log(plane1.includes('Boeing'));
// console.log(plane1.startsWith('Air'));

// if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
//   console.log('Part of the new Airbus family');
// }

// //Practice exercize
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else console.log('Welcome aboard');
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//split & join
// console.log('a+very+nice+string'.split('+'));
// const [firstName, lastName] = 'Bohdan Alieksieiev'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('bohdan jay');

// //padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log('Jay'.padStart(25, '+'));

// console.log(message.padEnd(25, '+'));
// console.log('Jay'.padEnd(25, '+'));

// const maskCreditCard = function (number) {
//   const str = String(number);
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(1434567733441123));
// console.log(maskCreditCard(733442222));

// //repeat method
// const message2 = 'Bad weather... All Departures delayed! ';
// console.log(message2.repeat(5));

// const planesInLine = function (number) {
//   console.log(`There are ${number} planes in line ${'✈️'.repeat(number)}`);
// };

// planesInLine(3);
// planesInLine(5);
// planesInLine(8);

//#endregion

//#region ------- Lection 117-118 Maps--------

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are close');
// // console.log(rest.get('name'));
// // console.log(rest.get(true));
// // console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // console.log(rest.clear);
// console.log(rest.size);
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct answer!'],
//   [false, 'Try again'],
// ]);

// //convert object ot map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //quizz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

// //convert map to array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
//#endregion

//#region ------- Lection 116 Sets--------
// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'risotto',
//   'pasta',
//   'pizza',
// ]);
// console.log(orderSet);
// console.log(new Set('jay'));
// console.log(orderSet.size);
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('garlic bread');
// orderSet.add('garlic bread');
// orderSet.delete('risotto');
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// //example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('jayshha').size);

//#endregion

//#region ------- Lection 114 Looping Objects--------
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
// //Property NAME
// const properties = Object.keys(openingHours);
// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //Entire Object
// const entries = Object.entries(openingHours);
// //console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//#endregion

//#region ------- Lection 113 Optional chaining----------

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// //with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? `Closed`;
//   console.log(`On ${day}, we open at ${open}`);
// }

// //methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [{ name: 'Bohdan', email: 'hello@alex.com' }];
// console.log(users[0]?.name ?? 'User array is empty');

//#endregion

//#region ------- Lection 111 Loop arrays-----

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [i, item] of menu.entries()) {
//   console.log(`${i}: ${item}`);
// }

//#endregion

//#region  ------ Lection 109 Logical assignment---

// const rest1 = {
//   name: 'Capi',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La pizza',
//   owner: 'Giovani Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// console.log(rest1);
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest2);

// rest1.numGuests ||= 10;
// console.log(rest1);

// rest2.numGuests ||= 10;
// console.log(rest2);

// rest1.numGuests ??= 10;
// console.log(rest1);

// rest2.owner = rest2.owner && '<Anonymous>';
// console.log(rest2);
// rest1.owner = rest1.owner && '<Anonymous>';
// console.log(rest1);

// rest1.owner &&= '<Anonymous>';
// console.log(rest1);
// rest2.owner &&= '<Anonymous>';
// console.log(rest2);

//#endregion

//#region  ------------- Lection 108 ------------
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish coalescing operator
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
//#endregion

//#region  ------------- Lection 107 ------------
/*
console.log('---- OR ----');
console.log(3 || 'Jay');
console.log('' || 'Jay');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- End ----');
console.log(0 && 'Jay');
console.log(7 && 'jay');
console.log('hello' && 26 && null && 6);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

//#endregion

/*#region ------------- Lection 105-106 ------------
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
//Spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
const newMenu = [...restaurant.mainMenu, 'Pirozhki'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables are arrays, strings, maps, sets. Not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

//real world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

//old version
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//ES6 version
restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { ...restaurant, founder: 'Daniel', foundedIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Valentinos';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
//#endregion
/*
// 1) Destructuring
//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);
console.log(arr);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(4, 2);
add(1, 1, 1, 1, 1, 1, 2);

const x = [23, 2, 5];
add(...x);
restaurant.orderPizza('mushrooms', 'onions', 'mushrooms');
restaurant.orderPizza('pineapples');
*/
/* ----------------------------------------------------------
restaurant.orderDelivery({
  time: '22:30',
  address: 'Dnipro city',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ address: 'Kiev', starterIndex: 1 });


//Object Destructing
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

-------------------------------------------------*/

/* ----------------------------------------
//Destructing arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Retrieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 5];
console.log(p, q, r);
------------------------------------------------*/
