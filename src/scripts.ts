import $, { get } from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));

// //Task 1

// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const sumNumbers = (inputA: number, inputB: number): number => inputA + inputB;

console.log(sumNumbers(1, 2)); // = 3
console.log(sumNumbers(1, 10)); // = 11
console.log(sumNumbers(99, 1)); // = 100

// //Task 2

// Write a function that takes a value as argument
// Return the type of the value

const argumentType = (inputA: any): any => typeof (inputA);

console.log(argumentType(1)); // = number
console.log(argumentType(false)); // = boolean
console.log(argumentType({})); // = object
console.log(argumentType(null)); // = object
console.log(argumentType('string')); // = string
console.log(argumentType(['array'])); // = object

// //Task 3

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const checkValue = (inputA: any, inputB: any): boolean => {
  if (typeof (inputA) === typeof (inputB) && inputA === inputB) {
    return true;
  } return false;
};

console.log(checkValue(2, 3)); // = false
console.log(checkValue(3, 3)); // = true
console.log(checkValue(1, '1')); // = false
console.log(checkValue('10', '10')); // = true

// //Task 4 (Japarbauda)

// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const nthCharacter = (inputA: string, inputB: number): string => inputA.charAt(inputB);

console.log(nthCharacter('abcd', 1)); // = b
console.log(nthCharacter('zyxbwpl', 5)); // = p
console.log(nthCharacter('gfedcba', 3)); // = d

// //Task 5

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const removeFirstThree = (inputA: string): string => inputA.substring(3);

console.log(removeFirstThree('abcdefg')); // = defg
console.log(removeFirstThree('1234')); // = 4
console.log(removeFirstThree('fgedcba')); // = dcba

// //Task 6

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const returnLastThree = (inputA: string): string => inputA.substring(inputA.length - 3);

console.log(returnLastThree('abcdefg')); // = efg
console.log(returnLastThree('1234')); // = 234
console.log(returnLastThree('fgedcba')); // = cba

// //Task 7

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const firstThreeChars = (inputA: string): string => inputA.substring(0, 3);

console.log(firstThreeChars('abcdefg')); // = abc
console.log(firstThreeChars('1234')); // = 123
console.log(firstThreeChars('fgedcba')); // = fge

// //Task 8

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const firstHalf = (inputA: string): string => inputA.substring(0, inputA.length / 2);

console.log(firstHalf('abcdefgh')); // = abcd
console.log(firstHalf('1234')); // = 12
console.log(firstHalf('gedcba')); // = ged

// //Task 9

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const removeLastThree = (inputA: string): string => inputA.substring(0, inputA.length - 3);

console.log(removeLastThree('abcdefg')); // = abcd
console.log(removeLastThree('1234')); // = 1
console.log(removeLastThree('fgedcba')); // = fged

// //Task 10

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const percentOf = (inputA: number, inputB: number): number => (inputB / 100) * inputA;

console.log(percentOf(100, 50)); // = 50
console.log(percentOf(10, 1)); // = 0.1
console.log(percentOf(500, 25)); // = 125

// //Task 11

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments (6 + 5 - 4 * 3 / 2)
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const getResult = (
  inputA: number,
  inputB: number,
  inputC: number,
  inputD: number,
  inputE: number,
  inputF: number,
): number => ((((inputA + inputB) - inputC) * inputD) / inputE) ** inputF;

console.log(getResult(6, 5, 4, 3, 2, 1)); // = 10.5
console.log(getResult(6, 2, 1, 4, 2, 3)); // = 2744
console.log(getResult(2, 3, 6, 4, 2, 3)); // = -8

// //Task 12

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const evenOrOdd = (inputA: number): boolean => {
  if (inputA % 2 === 0) {
    return true;
  } return false;
};

console.log(evenOrOdd(10)); // = true
console.log(evenOrOdd(-4)); // = true
console.log(evenOrOdd(5)); // = false
console.log(evenOrOdd(-111)); // = false

// //Task 13

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

// //Task 14

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

// //Task 15

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

// //Task 16

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

// //Task 17

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

// //Task 18

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

// //Task 19

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

// //Task 20

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

// //Task 21

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

// //Task 22

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

// //Task 23

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

// //Task 24

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

// //Task 25

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

// //Task 26

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

// //Task 27

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

// //Task 28

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

// //Task 29

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

// //Task 30

// Write a function that takes an array (a) as argument
// Return the number of elements in a

// //Task 31

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

// //Task 32

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

// //Task 33

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

// //Task 34

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

// //Task 35

// Write a function that takes an array of strings as argument
// Return the longest string

// //Task 36

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// //Task 37

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

// //Task 38

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

// //Task 39

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// //Task 40

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

// //Task 41

// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

// //Task 42

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

// //Task 43

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

// //Task 44

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

// //Task 45

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

// //Task 46

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

// //Task 47

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

// //Task 48

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

// //Task 49

// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

// //Task 50

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

// //Task 51

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

// //Task 52

// Write a function that takes an object (a) as argument
// Return an array with all object keys

// //Task 53

// Write a function that takes an object (a) as argument
// Return the sum of all object values

// //Task 54

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

// //Task 55

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

// //Task 56

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

// //Task 57

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// //Task 58

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// //Task 59

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

// //Task 60

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

// //Task 61

// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

// //Task 62

// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

// //Task 63

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

// //Task 64

// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

// //Task 65 (Spread operators only)

// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both
// arrays

// //Task 66

// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element

// //Task 67

// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element

// //Task 68

// Write a function that takes two objects as parameters
// and return an object which contains properties from both
// objects

// //Task 69

// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string
