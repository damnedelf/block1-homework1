//first
// /- Имеется строка, скажем, aaabbdcccccf. Преобразовать ее к виду a3b2d1c5f1. Еще пример: aabbaa должна быть преобразована в a2b2a2, а не в a4b2!
function stringTaskHandler(str) {
  let newString = "";
  let counter = 1;

  for (i = 0; i < str.length; i++) {
    let current = str.charAt(i);
    let next = str.charAt(i + 1);
    let previous = str.charAt(i - 1);
    if (current == next) {
      counter++;
    } else if (current != next && current != previous) {
      newString += current + counter.toString();
    } else {
      newString += previous + counter.toString();
      counter = 1;
    }
  }
  return newString;
}
console.assert(
  stringTaskHandler(`aaa`) === `a3`,
  "Actual result: %s",
  stringTaskHandler(`aaa`)
);
console.assert(
  stringTaskHandler(`aaabbdcccccf`) === `a3b2d1c5f1`,
  "Actual result: %s",
  stringTaskHandler(`aaabbdcccccf`)
);
console.assert(
  stringTaskHandler(`aaabbaa`) === `a3b2a2`,
  "Actual result: %s",
  stringTaskHandler(`aaabbaa`)
);
