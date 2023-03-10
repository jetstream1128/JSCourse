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
