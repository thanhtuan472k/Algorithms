/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
 * @param {Array} arr
 * @returns {number} count unique values
 */
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

let result = countUniqueValues([1, 2, 5, 9, 9.3, 100000]);
let result2 = countUniqueValues([1, 0, -2, 323]);

console.log(result);
console.log(result2);
