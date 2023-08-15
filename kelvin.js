// Learn to assign values to variables, and use them to print out messages to the terminal.
// Types include const, let, var
// const is a constant value that cannot be changed
// let is a variable that can be changed

//constant kelvin value
const kelvin = 311;

// celsius is 273 less than kelvin
let celsius = kelvin - 273;
//formula for celsius to farenheit and rounded of with Math.floor()
let fahrenheit = Math.floor(celsius*(9/5)+32);

let newton = Math.floor(celsius*(33/100))

//String interpolation syntax is ${variable}
//console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//This helps to print out the temperature in fahrenheit using string interpolation

console.log(`The temperature is

- ${celsius} degrees 
- ${fahrenheit} Fahrenheit 
- ${kelvin} K 
- ${newton} Newton.

Formulas are:

newton = celsius*(33/100)

fahrenheit = celsius*(9/5)+32
`)




