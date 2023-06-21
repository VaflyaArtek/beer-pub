// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
  }

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

const circleCircumference = (circle) =>
  +(2 * Math.PI * circle.radius).toFixed(6);