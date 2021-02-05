//В последовательности записаны целые числа от 1 до N в произвольном порядке, но одно из чисел пропущено
// (остальные встречаются ровно по одному разу). N заранее неизвестно. Определить пропущенное число

function numFinder(array) {
  let N = Math.max.apply(null, array);
  let possibleSum = ((1 + N) / 2) * N;
  let currentSum = 0;
  for (let a of array) {
    currentSum += a;
  }
  return possibleSum - currentSum;
}
console.assert(
  numFinder([2, 3, 1, 5]) === 4,
  "Actual result: %s",
  numFinder([2, 3, 1, 5])
);
console.assert(
  numFinder([2, 3, 1, 5, 7, 4]) === 6,
  "Actual result: %s",
  numFinder([2, 3, 1, 5, 7, 4])
);
console.assert(
  numFinder([2, 3, 1, 5, 7, 4, 6, 10, 9]) === 8,
  "Actual result: %s",
  numFinder([2, 3, 1, 5, 7, 4, 6, 10, 9])
);
