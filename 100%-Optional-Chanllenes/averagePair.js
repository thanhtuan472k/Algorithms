/**
 * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
 * @param {Array} arr
 * @param {number} number
 * @returns {boolean}
 * @example
 * - averagePair([1, 2, 3], 2) // true
 * - averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
 * - averagePair([], 4) // false
 * - averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
 */

function averagePair(arr, number) {
  if (arr.lenght <= 0) {
    return false;
  } else {
    let sum = 0;
    for (let index = 0; index <= arr.length; index++) {
      sum += arr[index];
    }
    console.log(sum);

    let a = sum / arr.length;

    if (Math.round(a) === Math.round(number)) {
      return true;
    } else {
      return false;
    }
  }
}

// using reduce array method
function averagePair1(arr, number) {
  if (arr.lenght <= 0) {
    return false;
  } else {
    return (
      Math.round(
        arr.reduce((sum, number) => {
          console.log(sum, number);
          return (sum += number);
        }, 0) / arr.length
      ) === Math.round(number)
    );
  }
}
// console.log(averagePair([1, 2, 3], 2));
console.log(averagePair1([1, 2, 3], 2));
