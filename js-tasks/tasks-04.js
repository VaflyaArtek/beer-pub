// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

const stringToArray = str => str.split(" ");

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

const DNAtoRNA = dna => dna.replace(/T/gi, "U");

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const min = arr => Math.min(...arr);

const max = arr => Math.max(...arr);

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// need to change the name of the constant to 'min'

const minimal = (arr, type) => {
  return type === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
};

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(arr) {
  const wolfIndex = arr.reverse().indexOf("wolf");
  return wolfIndex === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`;
}

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
// const maps = arr => arr.map(e => e * 2);

function maps(x) {
  const arr = [];
  x.forEach(e => arr.push(e * 2));
  return arr;
}

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

const doubleInteger = num => num * 2;

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

const century = year => Math.ceil(year / 100);

// https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript

const multiply = (num1, num2) => num1 * num2;

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

const makeNegative = num => -Math.abs(num);

// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript

const cockroachSpeed = s => Math.floor(s * 100000 / 3600);

// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript

const otherAngle = (a, b) => 180 - a - b;

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

<<<<<<< HEAD
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}
=======
const nthEven = num => num * 2 - 2;

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

const getRealFloor = floor => {
  return floor > 13 ? floor - 2
    : floor > 0 ? floor - 1
    : floor;
};

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;

// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

const isDivisible = (n, x, y) => Number.isInteger(n / x + n / y);
>>>>>>> c58c6dd09c73007ffc1f47a05d0de3480db1b9f4
