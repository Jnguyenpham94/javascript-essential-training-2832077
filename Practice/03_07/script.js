/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const dog = {
  hair: true,
  hairColor: "white",
  age: 9,
  hairLength: "medium",
  cleanliness: true,
  bath: function (bathed) {
    this.cleanliness = bathed;
  },
};

const person = {
  fName: "Rick",
  lName: "Sanchez",
  iQ: 300,
  hairColor: "gray",
  clothes: false,
  wearClothes: function (state) {
    this.clothes = state;
    if (this.clothes) {
      console.log("He has clothes");
    } else {
      console.log("HE IS NAKED, Oh GEEZ");
    }
  },
  armed: true,
};

console.log(dog);
console.log("This person is: ", person);
