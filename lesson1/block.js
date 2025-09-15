const crypto = require("crypto");

const arr = ["apple", "banana", "orange"];

const obj = {
  name: "ryan",
  location: "NSW",
  age: 28
}

class car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const myCar = new car("Toyota", "Corolla", 2016);
const yourCar = new car("Kia", "Rio", 2018);

console.log(myCar, "\n", yourCar);

// ------------

class User {
  constructor(name, age, location, email) {
    this.name = name;
    this.age = age; 
    this.location = location;
    this.email = email;
  }
}

const Jerry = new User("Jerry", 42, "QLD", "jezza@hotmail.com");

const Michael = new User("Michael", 28, "NSW", "jezza@hotmail.com");
const Alice = new User("Alice", 16, "ACT", "jezza@hotmail.com");
const Tim = new User("Tim", 26, "TAS", "jezza@hotmail.com");

console.log(Jerry);
console.log(Michael);
console.log(Alice);
console.log(Tim);





