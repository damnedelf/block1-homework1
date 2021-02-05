// - Написать функцию, которая принимает на вход 2 строки и проверяет являются ли входные строки анаграммами

// Примеры:
// isAnagram('friend', 'Finder'); //true
// isAnagram('hello', 'bye'); //false
function isAnagram(str1, str2) {
  let arrayFromStr1 = [];
  let arrayFromStr2 = [];
  str1 = str1.toLowerCase();
  arrayFromStr1 = Array.from(str1);
  arrayFromStr1.sort();
  str1 = arrayFromStr1.toString();
  str2 = str2.toLowerCase();
  arrayFromStr2 = Array.from(str2);
  arrayFromStr2.sort();
  str2 = arrayFromStr2.toString();

  return str1 == str2;
}
console.assert(
  isAnagram(`pipeC`, "ceipp") == true,
  "Actual result: %s",
  isAnagram(`pipeC`, "ceipp")
);
console.assert(
  isAnagram("friend", "Finder") == true,
  "Actual result: %s",
  isAnagram("friend", "Finder")
);
console.assert(
  isAnagram("hello", "bye") == false,
  "Actual result: %s",
  isAnagram("hello", "bye")
);
