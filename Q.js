/*-------------*/
console.log("--------");
// Create a function that takes a string of words (or just one word) and converts each word from camelCase to snake_case.

// Examples
// camelToSnake("magicCarrots") ➞ "magic_carrots"

// camelToSnake("greatApples for aSmellyRhino") ➞ "great_apples for a_smelly_rhino"

// camelToSnake("thatsGreat") ➞ "thats_great"
// Notes
// You won't get more than two capitals in a row (e.g. "DIYFoods" is not given).
const wordsWithCapLetters = "thatsGreat";

const camelToSnake = (str) => {
  const arrForLetters = [...str];
  const arrForNewLetters = [];
  let finalString = "";

  for (let i = 0; i < arrForLetters.length; i++) {
    if (
      (arrForLetters[i] >= "a" && arrForLetters[i] <= "z") ||
      arrForLetters[i] === " "
    ) {
      arrForNewLetters.push(arrForLetters[i]);
    }

    if (arrForLetters[i] >= "A" && arrForLetters[i] <= "Z") {
      arrForNewLetters.splice([i], 1, "_");
      arrForNewLetters.push(arrForLetters[i]);
    }
  }

  finalString = arrForNewLetters.join("").toLowerCase();

  return finalString;
};

console.log(camelToSnake(wordsWithCapLetters));

/*-----------------*/
/*
Given an array of 10 numbers, return whether or not the array is shuffled sufficiently enough. In this case, if 3 or more numbers appear consecutively (ascending or descending), return false.

Examples
isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]) ➞ false
// 1, 2, 3 appear consecutively

isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]) ➞ false
// 9, 8, 7, 6 appear consecutively

isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]) ➞ true
// No consecutive numbers appear

isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]) ➞ true
// No consecutive numbers appear
Notes
Only steps of 1 in either direction count as consecutive (i.e. a sequence of odd and even numbers would count as being properly shuffled (see example #4)).
You will get numbers from 1-10.
*/
console.log("--------");
const arrOfNums = [1, 2, 3, 5, 8, 6, 9, 10, 7, 4];

const isShuffledWell = (arr) => {
  let valBoolean;

  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === arr[i + 1] - 1 && arr[i] === arr[i + 2] - 2) ||
      (arr[i] === arr[i + 1] + 1 && arr[i] === arr[i + 2] + 2)
    ) {
      valBoolean = false;
    }
  }

  return valBoolean === false ? console.log(false) : console.log(true);
};

console.log(isShuffledWell(arrOfNums));
