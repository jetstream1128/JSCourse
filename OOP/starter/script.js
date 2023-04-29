'use strict';

//#region ------ Lecture 208 Constructor functions and the 'new' operator -----
/*
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this
  //this.calcAge = function () {
  //  console.log(2024 - this.birthYear);
  //};
};

const bohdan = new Person('Bohdan', 1993);

// 1. New empty {} is created
// 2. Function is called, this = {}
// 3. {} linked to the prototype
// 4. function automatically returns {}

const daisy = new Person('Daisy', 1996);
const kim = new Person('Kim', 2000);

// console.log(bohdan, daisy, kim);
// console.log(bohdan instanceof Person);
*/
//#endregion

//#region ------ Lecture 209 Prototypes -----
/*
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

bohdan.calcAge();
daisy.calcAge();
kim.calcAge();
console.log(bohdan.__proto__);
console.log(bohdan.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(bohdan));

Person.prototype.species = 'Homo Sapiens';
console.log(bohdan.species, daisy.species);

console.log(bohdan.hasOwnProperty('firstName'));
console.log(bohdan.hasOwnProperty('species'));
*/
//#endregion

//#region ------ Lecture 211 Prototypal inheritance on built-in objects -----
/*
console.log(bohdan.__proto__);
console.log(bohdan.__proto__.__proto__);
console.log(bohdan.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 6, 2, 4, 6, 1]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
*/
//#endregion

//#region ------ Lecture 212 Challenge #1 -----
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
*/
/*
const Car = function (carName, speed) {
  this.carName = carName;
  this.speed = speed;
};

//2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.carName} going at ${this.speed} km/h`);
};
//3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.carName} going at ${this.speed} km/h`);
};
//4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();

car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();

*/
/*
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
//#endregion

//#region ------ Lecture 213 ES6 Classes -----

//class expression
// const PersonCL = class {};

//class declaration
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(`${this.fullName} is ${2023 - this.birthYear} years old`);
  }

  greet() {
    console.log(`Hello ${this.fullName}`);
  }
}

const jessica = new PersonCL('Jessica', 1996);
// console.log(jessica);
// jessica.calcAge();
// jessica.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizen
//3. Classes are executed in strict mode

//#endregion

//#region ------ Lecture 214 Setter and getter -----
/*
const account = {
  owner: 'Bohdan',
  movements: [200, 450, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance methods
  calcAge() {
    console.log(`${this.firstName} is ${2023 - this.birthYear} years old`);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //static method
  static hey() {
    console.log('Hey there 🍕');
    console.log(this);
  }
}

const walter = new PersonCL('Walter White', 1996);
console.log(walter);
*/
//#endregion

//#region ------ Lecture 215 Static methods -----
/*
Person.hey = function () {
  console.log('Hey there 🍕');
  console.log(this);
};

Person.hey();
PersonCL.hey();
*/
//#endregion

//#region ------ Lecture 216 Object.create -----
/*
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('sarah', 1979);
sarah.calcAge();
*/
//#endregion

//#region ------ Lecture 217 Challenge #2 -----
/*
//1. Re-create challenge 1, but this time using an ES6 class;
class CarCL {
  constructor(manufacture, speed) {
    this.manufacture = manufacture;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.carName} going at ${this.speed} mi/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.carName} going at ${this.speed} mi/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const car3 = new CarCL('Ford', 120);
console.log(car3.speedUS);
car3.accelerate();
car3.brake();

car3.speedUS = 50;
console.log(car3);
//2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
//3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
//4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

//DATA CAR 1: 'Ford' going at 120 km/h
*/
//#endregion

//#region ------ Lecture 218  Inheritance between classes (Constructor function)-----
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer science');
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike instanceof Student);
console.log(mike instanceof Person);

console.dir(Student.prototype.constructor);
*/
//#endregion

//#region ------ Lecture 219 Challenge #3 -----
/*
//1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
const Car = function (manufacture, speed) {
  this.manufacture = manufacture;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.manufacture} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.manufacture} going at ${this.speed} km/h`);
};

const EV = function (manufacture, speed, charge) {
  Car.call(this, manufacture, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

//2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
//3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.manufacture} going at ${this.speed}, with a charge of ${this.charge}`
  );
};
//4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

//DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
//GOOD LUCK 😀
*/
//#endregion

//#region ------ Lecture 220 Inheritance between classes (ES6) -----
/*
class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2023 - this.birthYear
      } years old, bur as a student I feel more like ${
        2023 - this.birthYear + 5
      }`
    );
  }
}

const martha = new StudentCL('Martha Hurry', 2002, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();
*/
//#endregion

//#region ------ Lecture 221  Inheritance between classes (Object.create)-----
/*
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and i study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 1993, 'Computer science');
console.log(jay);
jay.introduce();
jay.calcAge();
*/
//#endregion

//#region ------ Lecture 222-224 Another class exemple / Encapsulation / Class fields -----
/*
//1) Public fields
//2) Private fields
//3) Public methods
//4) Private methods
// (there is also the Static version)

class Account {
  //1) Public fields (instances)
  locale = navigator.language;

  //2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // this.locale = navigator.language;

    //Protected property
    // this._movements = [];
    this.#pin = pin;

    console.log(`Thanks for opening account, ${owner}`);
  }

  //Public interface API
  //3) Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan ${val} is approved`);
      return this;
    }
  }
  static hepler() {
    console.log('Helper');
  }

  //4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Bohdan', 'UAH', 1111);
*/
//not good idea
/*
acc1.movements.push(250);
acc1.movements.push(-120);
*/
/*
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);

console.log(acc1.getMovements());
Account.hepler();
// acc1.#approveLoan(1000);
// console.log(acc1.#movements);
*/
//#endregion

//#region ------ Lecture 225 Chaining Methods -----
/*
all we need to do is add return this; to the methods
withdraw(val) {
    this.deposit(-val);
    return this;
  }
  */
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

//#endregion

//#region ------ Lecture 227 Challenge #4 -----

// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private;
//3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
/*
class CarCl {
  constructor(manufacture, speed) {
    this.manufacture = manufacture;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.manufacture} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.manufacture} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(manufacture, speed, charge) {
    super(manufacture, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.manufacture} going at ${this.speed}, with a charge of ${this.charge}`
    );
    return this;
  }
}
//DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
const rivian = new EVCl('Rivian', 120, 23);

console.log(rivian);
rivian.accelerate();
rivian.accelerate();
rivian.brake();
rivian.chargeBattery(90);

rivian.accelerate().accelerate().brake().chargeBattery(80);
*/
//#endregion
