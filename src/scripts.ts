// import $, { get } from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

// console.log('Body jQuery node:', $('body'));
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
type someType = number | object | boolean | string
const argumentType = (inputA: someType): number | object | boolean | string => typeof (inputA);

console.log(argumentType(1)); // = number
console.log(argumentType(false)); // = boolean
console.log(argumentType({})); // = object
console.log(argumentType(null)); // = object
console.log(argumentType('string')); // = string
console.log(argumentType(['array'])); // = object

// //Task 3

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const checkValue = (inputA: number | string, inputB: number | string): boolean => {
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

const nthCharacter = (inputA: string, inputB: number): string => inputA.charAt(inputB - 1);

console.log(nthCharacter('abcd', 1)); // = a
console.log(nthCharacter('zyxbwpl', 5)); // = w
console.log(nthCharacter('gfedcba', 3)); // = e

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

const letterOccurance = (inputA: string, inputB: string): number => {
  let count = 0;
  for (let i = 0; i < inputB.length; i += 1) {
    if (inputB[i] === inputA) {
      count += 1;
    }
  }
  return count;
};

console.log(letterOccurance('m', 'how many times does the character occur in this sentence?')); // = 2
console.log(letterOccurance('h', 'how many times does the character occur in this sentence?')); // = 4
console.log(letterOccurance('?', 'how many times does the character occur in this sentence?')); // = 1
console.log(letterOccurance('z', 'how many times does the character occur in this sentence?')); // = 0

// //Task 14

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const wholeNumber = (inputA: number): boolean => Number.isInteger(inputA);

console.log(wholeNumber(4)); // = true
console.log(wholeNumber(1.123)); // = false
console.log(wholeNumber(1048)); // = true
console.log(wholeNumber(10.48)); // = false

// //Task 15

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const divideOrMultiply = (inputA: number, inputB: number): number => {
  if (inputA < inputB) { return inputA / inputB; }
  return inputA * inputB;
};

console.log(divideOrMultiply(10, 100)); // = 0.1
console.log(divideOrMultiply(90, 45)); // = 4050
console.log(divideOrMultiply(8, 20)); // = 0.4
console.log(divideOrMultiply(2, 0.5)); // = 1

// //Task 16

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const concatenation = (inputA: string, inputB: string): string => {
  if (inputA.includes(inputB)) { return inputB + inputA; } return inputA + inputB;
};

console.log(concatenation('cheese', 'cake')); // = cheesecake
console.log(concatenation('lips', 's')); // = slips
console.log(concatenation('Java', 'script')); // = Javascript
console.log(concatenation(' think, therefore I am', 'I')); // = I think, therefore I am

// //Task 17

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundTo2Digits = (inputA: number): number => Number(inputA.toFixed(2));

console.log(roundTo2Digits(2.12397)); // = 2.12
console.log(roundTo2Digits(3.136)); // = 3.14
console.log(roundTo2Digits(1.12397)); // = 1.12
console.log(roundTo2Digits(26.1379)); // = 26.14

// //Task 18

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const splitIntoDigits = (inputA: number): string[] => inputA.toString().split('');

console.log(splitIntoDigits(10)); // = [1, 0]
console.log(splitIntoDigits(931)); // = [9, 3, 1]
console.log(splitIntoDigits(193278)); // = [1, 9, 3, 2, 7, 8]

// //Task 19

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const fixString = (inputA: string, inputB: string): string => {
  const cleanStringA = inputA.replace('%', '');
  const capitalLetter = cleanStringA[0].toUpperCase() + cleanStringA.slice(1);
  const cleanStringB = inputB.replace('%', '');
  const cleanStringReversed = cleanStringB.split('').reverse().join('');
  return capitalLetter + cleanStringReversed;
};

console.log(fixString('java', 'tpi%rcs')); // = Javascript
console.log(fixString('c%ountry', 'edis')); // = Countryside
console.log(fixString('down', 'nw%ot')); // = Downtown

// //Task 20

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const isPrimeOrNext = (inputA: number): number => {
  const checkPrime = (n: number): boolean => {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  if (checkPrime(inputA)) {
    return inputA;
  }
  let nextNum = inputA;
  while (!checkPrime(nextNum)) {
    nextNum += 1;
  }
  return nextNum;
};

console.log(isPrimeOrNext(38)); // = 41
console.log(isPrimeOrNext(7)); // = 7
console.log(isPrimeOrNext(115)); // = 127
console.log(isPrimeOrNext(2000)); // = 2003

// //Task 21

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const checkDivision = (inputA: number, inputB: number): number => {
  if (inputA % inputB === 0) {
    return inputA;
  }
  let nextNumber = inputA + 1;
  while (nextNumber % inputB !== 0) {
    nextNumber += 1;
  }
  return nextNumber;
};

console.log(checkDivision(1, 23)); // = 23
console.log(checkDivision(23, 23)); // = 23
console.log(checkDivision(7, 3)); // = 9
console.log(checkDivision(-5, 7)); // = 0

// //Task 22

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const stringAlter = (inputA: string, inputB: string): string => {
  const inputReversed = inputA.split('').reverse().join('');
  const parts = [];
  for (let i = 0; i < inputReversed.length; i += 3) {
    parts.push(inputReversed.slice(i, i + 3));
  }
  const stringAltered = parts.join(inputB);
  return stringAltered.split('').reverse().join('');
};
console.log(stringAlter('1234567', '.')); // = 1.234.567
console.log(stringAlter('abcde', '$')); // = ab$cde
console.log(stringAlter('zxyzxyzxyzxyzxyz', 'w')); // = zwxyzwxyzwxyzwxyzwxyz

// //Task 23

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const addNextAlphabetLetter = (inputA: string): string => {
  const result = [];
  for (let i = 0; i < inputA.length; i += 1) {
    const char = inputA[i];
    const nextChar = String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
    // -97 makes 'a' with index[0]
    // +1 gets the next character
    // % 26 makes sure that 'z' goes back to 'a'
    // + 97 converts back to Unicode code
    result.push(nextChar);
  }
  return result.join('');
};

console.log(addNextAlphabetLetter('bnchmf')); // = coding
console.log(addNextAlphabetLetter('bgddrd')); // = cheese
console.log(addNextAlphabetLetter('sdrshmf')); // = testing
// //Task 24

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const nthArrayElement = (inputA: number[], inputB: number): number => inputA[inputB - 1];

console.log(nthArrayElement([1, 2, 3, 4, 5], 3)); // = 3
console.log(nthArrayElement([10, 9, 8, 7, 6], 5)); // = 6
console.log(nthArrayElement([7, 2, 1, 6, 3], 1)); // = 7

// //Task 25

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeFromArray = (inputA: number[]): number[] => inputA.slice(3);

console.log(removeFromArray([1, 2, 3, 4])); // = [4]
console.log(removeFromArray([5, 4, 3, 2, 1, 0])); // = [2, 1, 0]
console.log(removeFromArray([99, 1, 1])); // = []

// //Task 26

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const extractFromArrayEnd = (inputA: number[]): number[] => inputA.slice(-3);

console.log(extractFromArrayEnd([1, 2, 3, 4])); // = [2, 3, 4]
console.log(extractFromArrayEnd([5, 4, 3, 2, 1, 0])); // = [2, 1, 0]
console.log(extractFromArrayEnd([99, 1, 1])); // = [99, 1, 1]

// //Task 27

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const extractFromArrayStart = (inputA: number[]): number[] => inputA.slice(0, 3);

console.log(extractFromArrayStart([1, 2, 3, 4])); // = [1, 2, 3]
console.log(extractFromArrayStart([5, 4, 3, 2, 1, 0])); // = [5, 4, 3]
console.log(extractFromArrayStart([99, 1, 1])); // = [99, 1, 1]

// //Task 28

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const lastNthFromArray = (inputA: number[], inputB: number): number[] => inputA.slice(-inputB);

console.log(lastNthFromArray([1, 2, 3, 4, 5], 2)); // = [4, 5]
console.log(lastNthFromArray([1, 2, 3], 6)); // = [1, 2, 3]
console.log(lastNthFromArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // = [6, 7, 8]

// //Task 29

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
type inputAtype = (boolean | string | number)[]
type inputBtype = boolean | string | number

const cleanArr = (inputA: inputAtype, inputB: inputBtype): inputAtype => {
  const filteredArr: inputAtype = inputA.filter((item) => item !== inputB);
  return filteredArr;
};

console.log(cleanArr([1, 2, 3], 2)); // = [1, 3]
console.log(cleanArr([1, 2, '2'], '2')); // = [1, 2]
console.log(cleanArr([false, '2', 1], false)); // = ['2', 1]
console.log(cleanArr([1, 2, '2', 1], 1)); // = [2, '2']

// //Task 30

// Write a function that takes an array (a) as argument
// Return the number of elements in a

const arrayElements = (inputA: number[]): number => inputA.length;

console.log(arrayElements([1, 2, 2, 4])); // = 4
console.log(arrayElements([9, 9, 9])); // = 3
console.log(arrayElements([4, 3, 2, 1, 0])); // = 5

// //Task 31

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const getNegatives = (inputA: number[]): number => {
  const filteredArr = inputA.filter((item) => item < 0);
  return filteredArr.length;
};
console.log(getNegatives([1, -2, 2, -4])); // = 2
console.log(getNegatives([0, 9, 1])); // = 0
console.log(getNegatives([4, -3, 2, 1, 0])); // = 1

// //Task 32

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const sortedArrayNum = (inputA: number[]): number[] => inputA.sort((b, a) => a - b);

console.log(sortedArrayNum([1, 3, 2])); // = [3, 2, 1]
console.log(sortedArrayNum([4, 2, 3, 1])); // = [4, 3, 2, 1]

// //Task 33

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const sortedArray = (inputA: string[]): string[] => inputA.sort();

console.log(sortedArray(['b', 'c', 'd', 'a'])); // = ['a', 'b', 'c', 'd']
console.log(sortedArray(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // = ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// //Task 34

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const averageNum = (inputA: number[]): number => {
  const arraySum = inputA.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return arraySum / inputA.length;
};

console.log(averageNum([10, 100, 40])); // = 50
console.log(averageNum([10, 100, 1000])); // = 370
console.log(averageNum([-50, 0, 50, 200])); // = 50

// //Task 35

// Write a function that takes an array of strings as argument
// Return the longest string

const longestString = (inputA: string[]): string => {
  let result = inputA[0];
  for (let i = 0; i < inputA.length; i += 1) {
    if (inputA[i].length > result.length) {
      result = inputA[i];
    }
  }
  return result;
};

console.log(longestString(['help', 'me'])); // = 'help'
console.log(longestString(['I', 'need', 'candy'])); // = 'candy'

// //Task 36

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const sameElements = (inputA: (string | number | boolean)[]): boolean => {
  const firstElement = inputA[0];
  for (let i = 0; i < inputA.length; i += 1) {
    if (inputA[i] !== firstElement) {
      return false;
    }
  }
  return true;
};

console.log(sameElements([true, true, true, true])); // = true
console.log(sameElements(['test', 'test', 'test'])); // = true
console.log(sameElements([1, 1, 1, 2])); // = false
console.log(sameElements(['10', 10, 10, 10])); // = false

// //Task 37

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
type multiArrays = (string | number | boolean)[][]
const joinArrays = (...arrays: multiArrays): (string | number | boolean)[] => [].concat(...arrays);

console.log(joinArrays([1, 2, 3], [4, 5, 6])); // = [1, 2, 3, 4, 5, 6]
console.log(joinArrays(['a', 'b', 'c'], [4, 5, 6])); // = ['a', 'b', 'c', 4, 5, 6]
console.log(joinArrays([true, true], [1, 2], ['a', 'b'])); // = [true, true, 1, 2, 'a', 'b']

// //Task 38

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
type someObject = { a: number, b: number};
const sortByProperty = (inputA: someObject[]): someObject[] => inputA.sort((a, b) => a.b - b.b);

console.log(sortByProperty([{ a: 1, b: 2 }, { a: 5, b: 4 }])); // = [{a:1,b:2},{a:5,b:4}]
console.log(sortByProperty([{ a: 2, b: 10 }, { a: 5, b: 4 }])); // = [{a:5,b:4},{a:2,b:10}]
console.log(sortByProperty([{ a: 1, b: 7 }, { a: 2, b: 1 }])); // = [{a:2,b:1},{a:1,b:7}]

// //Task 39

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const mergeArraysAndRemoveDuplicate = (inputA: number[], inputB: number[]): number[] => {
  const mergedArray = inputA.concat(inputB);
  const uniqueArray = Array.from(new Set(mergedArray));
  const sortedUniqueArray = uniqueArray.sort((a, b) => a - b);
  return sortedUniqueArray;
};

console.log(mergeArraysAndRemoveDuplicate([1, 2, 3], [3, 4, 5])); // = [1, 2, 3, 4, 5]
console.log(mergeArraysAndRemoveDuplicate([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
// = [ -11, -10, 5, 22, 41,  42, 333]

// //Task 40

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumElementsWithCondition = (inputA: number[], inputB: number): number => {
  const totalSum = inputA.reduce((elementSum, current) => {
    if (current > inputB) {
      return elementSum + current;
    }
    return elementSum;
  }, 0);
  return totalSum;
};

console.log(sumElementsWithCondition([1, 2, 3, 4, 5, 6, 7], 2)); // = 25
console.log(sumElementsWithCondition([-10, -11, -3, 1, -4], -3)); // = 1
console.log(sumElementsWithCondition([78, 99, 100, 101, 401], 99)); // = 602

// //Task 41

// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const minMaxInbetween = (inputA: number, inputB: number): number[] => {
  const result = [];
  for (let i = inputA; i <= inputB; i += 1) {
    result.push(i);
  }
  return result;
};

console.log(minMaxInbetween(2, 10)); // = [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(minMaxInbetween(1, 3)); // = [1, 2, 3]
console.log(minMaxInbetween(-5, 5)); // = [-5, -4, -3, -2, -1, 0,  1, 2, 3, 4, 5]
console.log(minMaxInbetween(2, 7)); // = [2, 3, 4, 5, 6, 7]

// //Task 42 (nesaprotu īsti)

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const arrayIntoObj = (inputA: string[]): { [key: string]: string[] } => {
  const result = inputA.reduce((accumulator, current) => {
    const firstLetter = current[0].toLowerCase();
    accumulator[firstLetter] = accumulator[firstLetter] || [];
    accumulator[firstLetter].push(current);
    return accumulator;
  }, {} as { [key: string]: string[] });
  return result;
};
console.log(arrayIntoObj(['Alf', 'Alice', 'Ben'])); // = { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(arrayIntoObj(['Ant', 'Bear', 'Bird'])); // = { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(arrayIntoObj(['Berlin', 'Paris', 'Prague'])); // = { b: ['Berlin'], p: ['Paris', 'Prague']}

// //Task 43

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const addNumToArray = (inputA: unknown[], inputB: number): unknown[] => {
  const result: unknown[] = [];
  if (inputB < 6) {
    result.push(0);
  }
  if (inputB >= 6) {
    result.push(inputB);
  }
  return result.concat(inputA);
};

console.log(addNumToArray([1, 2, 3], 6)); // = [6, 1, 2, 3]
console.log(addNumToArray(['a', 'b'], 2)); // = [0,'a','b']
console.log(addNumToArray([null, false], 11)); // = [11,null,false]

// //Task 44

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const saveEveryNth = (inputA: number[], inputB: number): number[] => {
  const result: number[] = [];
  for (let i = inputB - 1; i < inputA.length; i += inputB) {
    result.push(inputA[i]);
  }
  return result;
};

console.log(saveEveryNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // = [3, 6, 9]
console.log(saveEveryNth([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); // = [6, 1]
console.log(saveEveryNth([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); // = [2, 6, 4, 8, 10]

// //Task 45

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const countryKey = (inputA: {[key: string]: string}): string => inputA.country;

console.log(countryKey({ continent: 'Asia', country: 'Japan' })); // = 'Japan'
console.log(countryKey({ country: 'Sweden', continent: 'Europe' })); // = 'Sweden'

// //Task 46

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

const propTwoKey = (inputA: {[key: string | number]: number | string}): number | string => inputA['prop-2'];

console.log(propTwoKey({ one: 1, 'prop-2': 2 })); // = 2
console.log(propTwoKey({ 'prop-2': 'two', prop: 'test' })); // = 'two'

// //Task 47

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

const propAsString = (inputA: {[key: string]: string}, inputB: string): string => inputA[inputB];

console.log(propAsString({ continent: 'Asia', country: 'Japan' }, 'continent')); // = 'Asia'
console.log(propAsString({ country: 'Sweden', continent: 'Europe' }, 'country')); // = 'Sweden'

// //Task 48

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const objectBoolean = (inputA: {[key: string]: string | number}, inputB: string): boolean => {
  if (inputB in inputA) {
    return true;
  } return false;
};

console.log(objectBoolean({ a: 1, b: 2, c: 3 }, 'b')); // = true
console.log(objectBoolean({ x: 'a', y: 'b', z: 'c' }, 'a')); // = false
console.log(objectBoolean({ x: 'a', y: 'b', z: 'c' }, 'z')); // = true

// //Task 49

// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

const sameObjectKey = (inputA: string): {[key: string]: string} => {
  const result: {[key: string]: string} = {
    Key: inputA,
  };
  return result;
};

console.log(sameObjectKey('a')); // = {key: 'a'}
console.log(sameObjectKey('z')); // = {key: 'z'}
console.log(sameObjectKey('b')); // = {key: 'b'}

// //Task 50

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

const differentObjectKey = (inputA: string, inputB: string): {[key: string]: string} => {
  const result: {[key: string]: string} = {
    [inputA]: inputB,
  };
  return result;
};

console.log(differentObjectKey('a', 'b')); // = {a: 'b'}
console.log(differentObjectKey('z', 'x')); // = {z: 'x'}
console.log(differentObjectKey('b', 'w')); // = {b: 'w'}

// //Task 51

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
type objectType = {[key: string | number]: string | number}
const keyValue = (inputA: unknown[], inputB: unknown[]): objectType => {
  const result: {[key: string | number]: string | number} = {};
  for (let i = 0; i < inputA.length; i += 1) {
    result[inputA[i] as string | number] = inputB[i] as string | number;
  }
  return result;
};

console.log(keyValue(['a', 'b', 'c'], [1, 2, 3])); // = {a:1,b:2,c:3}
console.log(keyValue(['w', 'x', 'y', 'z'], [10, 9, 5, 2])); // = {w:10,x:9,y:5,z:2}
console.log(keyValue([1, 'b'], ['a', 2])); // = {1:'a',b:2}

// //Task 52

// Write a function that takes an object (a) as argument
// Return an array with all object keys

const objectToArrayKeys = (inputA: {[key: string]: number}) => {
  const result: string[] = [];
  for (const key in inputA) {
    if (Object.prototype.hasOwnProperty.call(inputA, key)) {
      result.push(key);
    }
  }
  return result;
};

console.log(objectToArrayKeys({ a: 1, b: 2, c: 3 })); // = ['a','b','c']
console.log(objectToArrayKeys({
  j: 9, i: 2, x: 3, z: 4,
})); // = ['j','i','x','z']
console.log(objectToArrayKeys({ w: 15, x: 22, y: 13 })); // = ['w','x','y']

// //Task 53

// Write a function that takes an object (a) as argument
// Return the sum of all object values

const objectValueSum = (inputA: {[key: string]: number}): number => {
  let objectSum = 0;
  for (const key in inputA) {
    if (typeof inputA[key] === 'number') {
      objectSum += inputA[key];
    }
  }
  return objectSum;
};

console.log(objectValueSum({ a: 1, b: 2, c: 3 })); // = 6
console.log(objectValueSum({
  j: 9, i: 2, x: 3, z: 4,
})); // = 18
console.log(objectValueSum({ w: 15, x: 22, y: 13 })); // = 50

// //Task 54

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

const sameObjectWithoutB = (inputA: {[key: string]: number}): {[key: string]: number} => {
  const result: {[key: string]: number} = {};
  for (const key in inputA) {
    if (Object.prototype.hasOwnProperty.call(inputA, key)) {
      result[key] = inputA[key];
    }
  }
  return result;
};

console.log(sameObjectWithoutB({ a: 1, b: 7, c: 3 })); // = { a: 1, c: 3 }
console.log(sameObjectWithoutB({ b: 0, a: 7, d: 8 })); // = { a: 7, d: 8 }
console.log(sameObjectWithoutB({
  e: 6, f: 4, b: 5, a: 3,
})); // = { e: 6, f: 4, a: 3 }

// //Task 55

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const mergeObjects = (inputA: {[key: string]: number}, inputB: {[key: string]: number}) => {
  const result: {[key: string]: number} = {};
  for (const key in inputA) {
    if (Object.prototype.hasOwnProperty.call(inputA, key)) {
      result[key] = inputA[key];
    }
  }

  const renamedInputB: {[key: string]: number} = { ...inputB, d: inputB.b };
  delete renamedInputB.b;

  for (const key in renamedInputB) {
    if (Object.prototype.hasOwnProperty.call(renamedInputB, key)) {
      result[key] = renamedInputB[key];
    }
  }
  return result;
};

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));// = { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(mergeObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));// = { a: 5, b: 4, c: 3, e: 2, d: 1}

// //Task 56

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const multiplyValue = (inputA: {[key: string]: number}, inputB: number): {[key:string]: number} => {
  const result: {[key: string]: number} = {};
  for (const key in inputA) {
    if (Object.prototype.hasOwnProperty.call(inputA, key)) {
      result[key] = inputA[key] * inputB;
    }
  }
  return result;
};

console.log(multiplyValue({ a: 1, b: 2, c: 3 }, 3)); // = {a:3,b:6,c:9}
console.log(multiplyValue({
  j: 9, i: 2, x: 3, z: 4,
}, 10)); // = {j:90,i:20,x:30,z:40}
console.log(multiplyValue({ w: 15, x: 22, y: 13 }, 6)); // = {w:90,x:132,y:78}

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
