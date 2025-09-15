
// let playlist = ["Tennessee Whiskey", "Mr. Brightside", "Shake It Off", "Golden"];

// // Add

// // adding item to the end
// playlist.push("Soda Pop");

// // add item to beginning
// playlist.unshift("Teenage Dirtbag");

// // add item in a certain spot (index)
// playlist.splice(2, 0, "Yellow");


// // Set 

// // Change a song
// playlist[4] = "Lover";

// // Remove last item from end
// playlist.pop();

// // Remove first item
// playlist.shift();

// // remove certain item
// playlist.splice(1, 1);


// console.log(playlist);





// // Objects

// // Objects store data in key-value pairs.

// let userObject = {
//   name: "Timothy",
//   age: 99,
//   email: "tim@gmail.com",
//   fav_colours: ["red", "blue"]
// }


// // Adding 
// userObject.phone = "0422896877";
// userObject["location"] = "NSW";


// // Set
// userObject.age = 1000;
// userObject.fav_colours[1] = "green";


// // Delete 
// delete userObject.email;
// delete userObject.phone;


// // Looping through an object
// Object.entries(userObject).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// // console.log(userObject);






// // Set()
// /* 

// A Set is a special type of collection that stores unique values only — meaning no duplicates are allowed.
// It’s like a guest list where each name can only appear once. If you try to add the same name again, it will just ignore the duplicate.

// Key points about Set:
// - You add items with .add(value)
// - You check if an item exists with .has(value)
// - You remove items with .delete(value)
// - You can loop through all items easily — like going down a list

// */

// let playerSet = new Set();

// playerSet.add("Tim");
// playerSet.add("Daniel");
// playerSet.add("Ryan");
// playerSet.add("James");
// playerSet.add("Marta");
// playerSet.add("Alagar");
// playerSet.add("Cass");
// playerSet.add("Shokrullah");
// playerSet.add("Tim"); // Ignores the duplicates


// if (playerSet.has("Daniel")) {
//   playerSet.delete("Daniel");
//   playerSet.add("Matilda");
// }


// playerSet.delete("Tim");


// // Looping through players
// for (let player of playerSet) {
//   console.log(`${player}`)
// }

// // console.log(playerSet);






// // Map()
// /*
// A Map is a collection that stores data in key-value pairs, like a dictionary or a phonebook.
// Each key is unique and maps to a value. You can think of it as a way to look up information based on a specific key.

// Key points about Map:
// - You add or update entries with .set(key, value)
// - You get a value by its key with .get(key)
// - You can check if a key exists with .has(key)
// - You remove entries with .delete(key)
// - You can clear the whole map with .clear()

// */

// let translations = new Map();

// translations.set("Hello", "Bonjour");
// translations.set("Goodbye", "Au Revoir");
// translations.set("Red", "Blue")

// console.log(translations)

// translations.set("Hello", "Ciao");

// translations.delete("Red");

// console.log(translations);

// translations.clear()

// console.log(translations);

// translations.forEach((value, key) => {
//   console.log(`${key} → ${value}`);
// });












// // Loops

// /*
//   for loop = repeats code a set number of times - Use when you know homw many times the loop will repeat
// */

// // For - counting
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }


// for (let i = 0; i <= 10; i++) {
//   if (i === 0) {
//     console.log("No steps");
//   } else {
//     console.log(`${i} step${i > 1 ? "s" : ""}`);
//   }
// }




// // While

// /*
// while loop → repeats code as long as a condition is true. Use when you don't know how many times you'll loop
// */
// let i = 0;
// while (i < 5) {
//   console.log("Print forever!");
//   i++
// }




// let guess;

// while (guess !== 5) {
//   guess = Number(prompt("Enter a number between 1 & 10"))
// }








// Class

/*

A class is like a blueprint or recipe for creating objects.
It defines what properties (details) and methods (actions) those objects will have.

Key points about classes:
- Classes let you create many similar objects easily without repeating code.
- You use a constructor to set up the object’s initial properties.
- You can add methods to define what the object can do.
- You create (instantiate) an object using the new keyword.

*/

class Burger {
  constructor(name, patties, sauce) {
    this.name = name;
    this.patties = patties;
    this.sauce = sauce;
  }

  describe() {
    return `${this.name} has ${this.patties} patties and ${this.sauce} sauce.`
  }
}


// instantiation - creating an instance of the class
let cheeseburger = new Burger("Triple Cheeseburger", 3, "Ketchup");
let zingerburger = new Burger("Zinger", 1, "Mayo");

console.log(cheeseburger.describe())



