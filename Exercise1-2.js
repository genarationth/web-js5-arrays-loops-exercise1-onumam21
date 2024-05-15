// #### 1.2 Declare and initialize an array called 'Planets' with 5 string values with names of planets. 
//     - Console.log each item in the array. Also console.log the index for each planet.

// Declare and initialize the array with names of planets
const Planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

// Loop through the array and log each item along with its index
for (let i = 0; i < Planets.length; i++) {
  console.log(`Index: ${i}, Planet: ${Planets[i]}`);
}
