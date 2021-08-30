function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// function addUpTo2(n) {
//   return (n * (n + 1)) / 2;
// }

// console.log(addUpTo2(6));
// console.log(addUpTo(6));

let t1 = performance.now();
addUpTo(1000000);
let t2 = performance.now();

console.log(`Time Elased: ${(t2 - t1) / 1000} second`);
