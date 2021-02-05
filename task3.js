//- В последовательности записаны целые числа.
// Одно из чисел встречается ровно один раз, остальные — по два раза. Найти число, которое встречается один раз.
function findSoloNum(array) {
  let result = [];

  for (let num of array) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  resultSum = 0;
  for (let a of result) {
    resultSum += a;
  }
  resultSum *= 2;

  arraySum = 0;
  for (let a of array) {
    arraySum += a;
  }
  return resultSum - arraySum;
}
// ;
console.assert(
  findSoloNum([-1, -1, -2, -2, 3, 3, -4]) === -4,
  "Actual result: %s",
  findSoloNum([-1, -1, -2, -2, 3, 3, -4])
);
console.assert(
  findSoloNum([1, 1, 2, 2, 3, 3, 4, 4, 5]) === 5,
  "Actual result: %s",
  findSoloNum([1, 1, 2, 2, 3, 3, 4, 4, 5])
);

/////////////////////////////////////
// with Timmy`s help
function timmyFindSoloNum(array) {
  let result = [];
  resultSum = 0;
  arraySum = 0;

  for (let num of array) {
    if (!result.includes(num)) {
      result.push(num);
      resultSum += num;
    }
    arraySum += num;
  }

  resultSum *= 2;

  return resultSum - arraySum;
}
console.assert(
  timmyFindSoloNum([-1, -1, -2, -2, 3, 3, -4]) === -4,
  "Actual result: %s",
  timmyFindSoloNum([-1, -1, -2, -2, 3, 3, -4])
);
//with Lesha`s help
function leshaFindSoloNum(arr) {

  var num = arr[0];
  
  for (var i = 1; i < arr.length; i++) {
      num = num ^ arr[i]
  }
  
  return num;
  }
  console.assert(
    leshaFindSoloNum([-1, -1, -2, -2, 3, 3, -4]) === -4,
    "Actual result: %s",
    leshaFindSoloNum([-1, -1, -2, -2, 3, 3, -4])
  );
