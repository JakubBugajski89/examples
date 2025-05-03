// Fibbonaci:
const secFibb = (el) => {
  let arr = [0, 1];

  for (let i = 2; i <= el; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
};

console.log(secFibb(7));

// -------------------------
// 2. Silnia

const factorialNum = (el) => {
  let num = 1;

  if (el >= 0) {
    for (let i = 1; i <= el; i++) {
      num *= i;
    }
  } else {
    console.log("Incorret value");
  }

  return num;
};

console.log(factorialNum(-1));

//3.
console.log("-------");
const firstObj = { a: 1, b: 2, c: 3 };
const secondObj = { a: "Apple", b: "Microsoft", c: "Google" };
const thirdObj = { key1: true, key2: false, key3: undefined };

const keysAndValues = (obj) => {
  const arrayOfKeys = [];
  const arrayOfValues = [];
  let ArrayOfKeysAndValues = [];

  for (const [key, value] of Object.entries(obj)) {
    arrayOfKeys.push(key);
    arrayOfValues.push(value);
  }

  const keySort = (a, b) => {
    return a - b;
  };

  arrayOfKeys.sort(keySort);
  ArrayOfKeysAndValues = [arrayOfKeys, arrayOfValues];

  return ArrayOfKeysAndValues;
};

console.log(keysAndValues(thirdObj));

//4.
const arrayOfStrings = ["a", "ccc", "dddd", "bb"];

const sortByLength = (arr) => {
  arr.sort((a, b) => a.length - b.length);
  return arr;
};
console.log(sortByLength(arrayOfStrings));
