/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 * @example
 * - isSubSequence('hello', 'hello world') //true
 */

function isSubSequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// using Recursive
function isSubSequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubSequence(str1.slice(1), str2.slice(1));
  return isSubSequence(str1, str2.slice(1));
}

console.log(isSubSequence("ngo", "ngo thanh tuan"));
console.log(isSubSequence("test", "case"));

console.log(isSubSequence2("test", "case"));
